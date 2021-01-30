---
title: 'Deploying an ASP.NET Web API using Azure Functions + PostgreSQL (Entity Framework Core)'
date: '1608992520'
tags: ['ASP.NET', '.NET Core', 'PostgreSQL']
---
I have a postgreSQL database running on a Digital Ocean droplet. One of the tables contains a list of vehicles with their year, make, model, body and trim:

&nbsp;
&nbsp;

![ERD Diagram](/img/erd_vehicles.png "ERD Diagram of Vehicle Table")

&nbsp;
&nbsp;


As there are over 117,660 vehicles in the table, users will need to use dropdowns to dynamically select the required year > make > model > body > trim (in that order).




## Setting up ASP.NET with PostgreSQL (Entity Framework)

First we'll initialize an ASP.NET Core Web API with the dotnet cli tool and then we'll install the Npgsql database driver and the ORM framework Entity Framework Core.


``` 
dotnet new webapi -o TireApi
cd TireApi
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Npgsql
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

Next, inside the appsettings.json file in the root of the project folder, add a connection string inside the json with your values substituted in to the <<>> tags:

&nbsp;
&nbsp;

```
  "connectionStrings": {
    "fitmentsDBConnectionString": "Server=<<hostname>>;Port=<<PortNo>>;Database=<<databaseName>>;Username=<<DBUser>>; Password=<<DBPass>>;"
  },
```

&nbsp;
&nbsp;


Now we'll create an entities folder to store our models
and create a class file to model an entry in the **vehicles_vehicle**:

&nbsp;
&nbsp;

***TireApi/entities/Vehicle.cs***
```
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace TireApi.Entities
{
    [Table("vehicles_vehicle")]
    public class Vehicle 
    {
        [Key]
        public int id{ get; set; }
        public int year{ get; set; }
        public string make{ get; set; }
        public string model{ get; set; }
        public string body{ get; set; }
        public string trim{ get; set; }
        
    }

}
```




## Setting up Database Context

In the Entities directory create a new file called FitmentContext.cs. Inside, we'll subclass the DbContext so that we'll be able to write and execute queries and map query results to entity objects: 

&nbsp;
&nbsp;

***TireApi/entities/FitmentContext.cs***
```
using Microsoft.EntityFrameworkCore;

namespace TireApi.Entities
{
    public class FitmentContext: DbContext
    {
        public FitmentContext(DbContextOptions<FitmentContext> options)
                : base(options)
                {
                    
                }

        public DbSet<Vehicle> Vehicles { get; set; }

    }

}
```

&nbsp;
&nbsp;

Now inside the ConfigureServices method in **TireApi/Startup.cs**, we'll get the retrieve the connection string we setup in **appsettings.json** and pass it in to Npgsql, so we can bind it to instance of our FitmentContext, which we'll then add to running services.

&nbsp;
&nbsp;


```
var sqlConnectionString = Configuration.GetConnectionString("fitmentsDBConnectionString");

            services.AddDbContext<FitmentContext>(opt => opt.UseNpgsql(sqlConnectionString));
```

&nbsp;
&nbsp;




## Setting up Service Layer

Create a new directory **TireApi/Services** and add an interface called **IVehicleRepository.cs** and implemenet it in another file called **VehicleRepository.cs**, using Entity to select distinct values based on matching columns.


***TireApi/Services/IVehicleRepository***
```
using System.Collections.Generic;

namespace TireApi.Services 
{
    public interface IVehicleRepository
    {
        IEnumerable<int> GetYears();
        IEnumerable<string> GetMakesByYear(int year);
        IEnumerable<string> GetModelsByYearAndMake(int year, string make);
        IEnumerable<string> GetBodiesByYearAndMakeAndModel(int year,string make, string model);
        IEnumerable<string> GetTrimsByYearAndMakeAndModelAndBody(int year,string make, string model, string body);


    }

}
```

&nbsp;
&nbsp;

With the FitmentContext setup as a contructor injection, create an implemented Repository Class for **IVehicleRepository.cs**. It will use the **_context** attribute to use Entity Frameworks query tool for retrieving lists of years, makes etc.

&nbsp;
&nbsp;

***/TireApi/Services/VehicleRepository.cs***
```

using TireApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace TireApi.Services
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly FitmentContext _context;

        public VehicleRepository(FitmentContext context)
        {
            _context = context;
        }

        public IEnumerable<int> GetYears()
        {
            List<int> years = _context.Vehicles
                .Select(v => v.year)
                .Distinct()
                .OrderBy(y => y)
                .ToList();
            
            return years;
        }

        public IEnumerable<string> GetMakesByYear(int year)
        {
            List<string> makes = _context.Vehicles
                .Where(v => v.year == year)
                .Select(v => v.make)
                .Distinct()
                .OrderBy(y => y)
                .ToList();
            
            return makes;
        }

        public IEnumerable<string> GetModelsByYearAndMake(int year, string make)
        {
            List<string> models = _context.Vehicles
                .Where(v => v.year == year && v.make == make)
                .Select(v => v.model)
                .Distinct()
                .OrderBy(y => y)
                .ToList();

            return models;
        }

        public IEnumerable<string> GetBodiesByYearAndMakeAndModel(int year, string make, string model)
        {
            List<string> bodies = _context.Vehicles
                .Where(v => v.year == year && v.make == make && v.model == model)
                .Select(v => v.body)
                .Distinct()
                .OrderBy(y => y)
                .ToList();

            return bodies;
        }

        public IEnumerable<string> GetTrimsByYearAndMakeAndModelAndBody(int year, string make, string model, string body)
        {
            List<string> trims = _context.Vehicles
                .Where(v => v.year == year && v.make == make && v.model == model && v.body == body)
                .Select(v => v.trim)
                .Distinct()
                .OrderBy(y => y)
                .ToList();
            return trims;
        }
    }
}
```

&nbsp;
&nbsp;

## Setting up Controller
Now in the existing **controller** directory create the file **VehicleController.cs**. The controller will have seperate routes for each of the dropdownlist retrievals with query parameters accumulating in each call. This will simplify testing each route.


&nbsp;
&nbsp;


```
using TireApi.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TireApi.Services;

namespace TireApi.Controllers 
{    
    [ApiController]
    [Route("api/vehicles")]
    public class VehicleController: ControllerBase
    {
        private readonly IVehicleRepository _vehicleRepository;

        public VehicleController(IVehicleRepository vehicleRepository)
        {
            _vehicleRepository = vehicleRepository;
        }
        [Route("years")]
        [HttpGet]
        public ActionResult <IEnumerable<int>> GetYears()
        {

            return Ok(_vehicleRepository.GetYears());
        }

        [Route("makes")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetMakes(int year)
        {
            return Ok(_vehicleRepository.GetMakesByYear(year));
        }
        
        [Route("models")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetModels(int year, string make)
        {
            return Ok(_vehicleRepository.GetModelsByYearAndMake(year, make));
        }
        
        [Route("bodies")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetBodies(int year, string make, string model)
        {
            return Ok(_vehicleRepository.GetBodiesByYearAndMakeAndModel(year, make, model));
        }
        
        [Route("trims")]
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetTrims(int year, string make, string model, string body)
        {
            return Ok(_vehicleRepository.GetTrimsByYearAndMakeAndModelAndBody(year, make, model, body));
        }

    }
}

```


&nbsp;
&nbsp;

Now to finally add the VehicleReposity class/inteface to the scope of the application by copying this in to the ConfigureServices method (just above services.AddControllers()):

&nbsp;
&nbsp;

```
services.AddScoped<IVehicleRepository, VehicleRepository>();

```

&nbsp;
&nbsp;

Now, run the development server using **dotnet run** and test the API. Make sure to use the -k (ignore lack of verifiable SSL certificate) flag with curl as ASP.NET Core by default has HTTPS enabled but not configured.


&nbsp;
&nbsp;


```
curl -X GET -k "https://localhost:5001/api/vehicles/years"

returns

[1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019]

curl -X GET -k "https://localhost:5001/api/vehicles/makes?year=2011"

returns

["Acura","Aston Martin","Audi","BMW","Bentley","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ferrari","Ford","Freightliner","GMC","Honda","Hyundai","Infiniti","Jaguar","Jeep","Kia","Lamborghini","Land Rover","Lexus","Lincoln","Lotus","Maserati","Maybach","Mazda","Mercedes-Benz","Mercury","Mini","Mitsubishi","Nissan","Porsche","Ram","Rolls-Royce","Saab","Scion","Smart","Subaru","Suzuki","Tesla","Think","Toyota","VPG","Volkswagen","Volvo"]

curl -X GET -k "https://localhost:5001/api/vehicles/models?year=2011&make=Toyota"

returns

["4Runner","Avalon","Camry","Corolla","FJ Cruiser","Highlander","Land Cruiser","Matrix","Prius","RAV4","Sequoia","Sienna","Tacoma","Tundra","Venza","Yaris"]

curl -X GET -k "https://localhost:5001/api/vehicles/bodies?year=2011&make=Toyota&model=Sienna"

returns

["4 Dr Mini Passenger Van","5 Dr Mini Passenger Van"]

curl -X GET -k "https://localhost:5001/api/vehicles/trims?year=2011&make=Toyota&model=Sienna&body=4 Dr Mini Passenger Van"

returns

["Base","LE","Limited (235/55R18 99 T)","Limited (235/55R18 99 V)","SE","XLE","XLE 18\" option"]


```

&nbsp;
&nbsp;
## Setup Azure App Service

Now to setup the Azure App Service using the az cli, first we'll need to create a resource group for the App Service, you can use **az account list-locations** to find an appropriate location:


&nbsp;
&nbsp;

```
az group create --name <<group-name>> --location <<your-location>>
```

&nbsp;
&nbsp;

Next, we'll create a deployment user. This only has to be done once when you first use azure, feel free to use a previously made account if you already have one.

&nbsp;
&nbsp;

```
az webapp deployment user set --user-name <<user>> --password <<pass>>
```


&nbsp;
&nbsp;

Now, create an app service play, with the free sku and a linux VM. The free sku will give 60 minutes of cpu utilization a day, and will automically shutdown after several minutes of no-use.

&nbsp;
&nbsp;


```
az appservice plan create --name <<your-app-name>> --resource-group <<group-name>> --sku F1 --is-linux

```


&nbsp;
&nbsp;

It's finally time to create the app itself, in this case it'll be a DOTNET 5.0 runtime, but use az webapp list-runtimes to find an appropriate runtime for you.

&nbsp;
&nbsp;

```

az webapp create --resource-group <<group-name>> --plan <<plan-name>> --name <<app-name>> --runtime "DOTNET|5.0" --deployment-local-git
```

&nbsp;
&nbsp;


Now, for the last step. Get the local deployment repo url from the output of the previous command and add the url as a remote origin to your current git repo. After that pust to remote using the credentials you created in the beginning.

```
git remote add azure https://<<user>>@<<app-name>>.scm.azurewebsites.net/<<app-name>>.git

git push azure master
```
&nbsp;
&nbsp;

*Note make sure to branch to master from main if you're using Github.


&nbsp;
&nbsp;

Voila! Your application is now deployed and can be accessed using the app url provided.
