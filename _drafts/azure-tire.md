---
title: 'Deploying using '
date: '1608992520'
tags: ['ASP.NET', '.NET Core', 'PostgreSQL']
---

## Background
I have a postgreSQL database running on a Digital Ocean droplet. One of the tables contains a list of vehicles with their year, make, model, body and trim:

In this Post I will be setting up th




## Setting up ASP.NET with PostgreSQL (Entity Framework)

Using ASP.NET Core, Npgsql and Entity Framework


```    
```
Log in to your AWS Management Console and go to the SES Management Console. Then go to **Email addresses** and click **Verifiy a New Email Address** and follow the instruction.


## Setting up the Python environment


The Python workspace will consist of two seperate virtual environments. One will be for provisioning and delploying the AWS Lambda Service along with an HTTP API Gateway, this will be done using the Amazon Cloud Development Kit library and the CDK Toolkit (cli). The other Python environent will be be for the Flask API and the AWS SDK library used to send emails using SES.


You need to have the CDK Toolkit installed (It requires node). Follow the instructions [**here**](https://docs.aws.amazon.com/cdk/latest/guide/cli.html).

&nbsp;
&nbsp;


The commands below will create a new project directory for cdk build environemnt and a lambda subdirectory to store the lambda code and setup the cdk environment:

```
mkdir cdk_flask_ses_lambda
cd cdk_flask_ses_lambda

cdk init --language python
cdk bootstrap

mkdir lambda
```
&nbsp;
&nbsp;



The cdk init command created a python virtual environment under the directory .env, activate this environment and install the necessary libraries:

```
. .env/bin/activate

pip install aws-cdk.aws-apigateway aws-cdk.aws-lambda aws-cdk.aws-iam
```
&nbsp;
&nbsp;


At this point the project directory structure should look like this (items marked *** are directories):

~~~
|-- README.md
|-- app.py
|-- cdk.json
|-- cdk_flas_ses_lambda
|   |-- __init__.py
|   `-- cdk_flas_ses_lambda_stack.py
|-- lambda
|-- requirements.txt
|-- setup.py
`-- source.bat
~~~

&nbsp;
&nbsp;

Now, lets deactivate the current virtual environment and create another virtual environment to be used in python lambda:
```
deactivate

cd lambda
python3 -m venv env
. env/bin/activate
pip install flask boto3
```

&nbsp;
&nbsp;


Configure CDK Stack to provision two main resources:


### Lambda Function

- The ***Lambda Function*** is provisioned by loading zip file in  ***/lambda*** containing Flask API code, lambda handler function and all the necessary libraries for Flask and Boto3.

&nbsp;
- The ***IAM Policy Statement*** creates a role for lambda handler, giving it access to send and recieve emails using SES.


### API Gateway

- The ***HTTP API Gateway*** will be created with a POST route at '/contact'. It will use a ***Lambda Proxy Integration*** which will send the POST request as a Payload to the lambda function. The format of the payload can be selected as either '1.0' or '2.0', information on the format structure can be found [**here**](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html). In this case I selected '1.0' as I'll be using awsgi python package to handle the payload and send it to my Flask application's WSGI inteface.


```python
import os

from aws_cdk import (
    core,
    aws_lambda as _lambda,
    aws_apigateway as apigw,
    aws_apigatewayv2 as apigw2,
    aws_iam as _iam
)


class PythonContactFormSesLambdaStack(core.Stack):


    def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:

        
        super().__init__(scope, id, **kwargs)

        # The code that defines your stack goes here
        flask_handler = _lambda.Function(
            self, 'FlaskHandler',
            runtime=_lambda.Runtime.PYTHON_3_8,
            code=_lambda.Code.asset('lambda/function.zip'),
            handler='handler.lambda_handler',
            timeout=core.Duration.seconds(20),
        )
        
        flask_handler.add_to_role_policy(_iam.PolicyStatement(
            effect=_iam.Effect.ALLOW,
            resources=["*"],
            actions=[
                "ses:SendEmail",
                "ses:SendRawEmail"
            ]
        ))

        contact_email_integration = apigw2.LambdaProxyIntegration(
            handler=flask_handler,
            payload_format_version=apigw2.PayloadFormatVersion.VERSION_2_0

        )

        base_api = apigw2.HttpApi(
            self,
            id='contact-api',
        )

    
        base_api.add_routes(
            path='/contact',
            methods=[apigw2.HttpMethod.POST],
            integration=contact_email_integration
        )


```
&nbsp;
&nbsp;

See Part 2 for the setup of the Flask REST API, the AWS SDK calls for sending an email and the wrapper for calling it from a lambda function.