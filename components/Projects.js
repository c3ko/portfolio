import React, { useState } from 'react';
import { listToTuples } from '../lib/helpers'

function ProjectItem({ project}) {
    return (
        <li className="project-item mx-1 mb-2 flex flex-col flex-no-wrap border-2 border-purple-500 bg-white">
            <img className="border-b border-gray-600" src={project.imgPath} alt={project.name}/>
            <span className="flex justify-between mx-2 text-lg">
                <div>{project.name}</div>
                <div>Open</div>
            </span>
            <p className="w-3/4 mx-auto py-4">
                {project.excerpt}
            </p>
            <span className="flex flex-wrap">
                { project.tagsList.map(tag => <div key={tag} className="border border-gray-300 "></div>) }
            </span>
        </li>
    )
}


function Projects() {

    const [techAdded, setTechAdded ] = useState([])


    const techList = ['React', 'Vanilla JS', 'Vue', 'PostgresQL', 'Django', 'Python', 
    'Spring Boot', 'ASP.NET Core', 'C#']

    const projectsList = [{name: 'Umlify', link: 'http://www.umlify.com', imgPath: '/img/umlify_thumbnail.png', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']},
            {name: 'Getting.in', link: 'http://getting-in.ca', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
        ]

    return (
        <section id="projects" className="bg-gray-100 text-purple-800 py-12 fix-margin">
            <div className="w-full md:mx-auto md:w-10/12 ">
                <h2 className="section-heading mx-auto">Projects</h2>
                
                <ul className="mt-8 flex flex-wrap justify-center">
                    { projectsList.map((project, index) => <ProjectItem key={project.name} lastItem={index === projectsList.length - 1} project={project} />) }
                </ul>
            </div>
        </section>
    )
}

export default Projects;
