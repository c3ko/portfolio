import React from 'react';
import IMACScreen from './IMACScreen'

function StackUsedBar() {
    const stackList = [{name: 'React', icon: null}, {name: 'Vue', icon: null}, {name: 'Spring Boot'}]
}


function ProjectItem({ projectInfo }) {

    return (
        <li className="border-2 border-transparent cursor-pointer hover:border-green-400  overflow-hidden m-2">

            <img className="w-full" src={projectInfo.imgPath} alt={projectInfo.name} />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{projectInfo.name}</div>
                <p className="text-gray-700">
                    {projectInfo.excerpt}
                </p>
            </div>
            <div className="px-6 py-4">
                {projectInfo.tagsList.map((tag, index) => <span className={"inline-block bg-green-500 rounded-sm px-3 py-1 text-sm font-semibold text-gray-100" + (projectInfo.tagsList.length === index + 1 ? "" : " mr-4")}>{tag}</span>)}

            </div>
        </li>
    )
}

function ProjectItemList ({ }) {
    return (
        <div classN>

        </div>
    )
}
function Projects() {

    const projectsList = [{name: 'Umlify', link: 'http://www.umlify.com', imgPath: '/img/umlify_thumbnail.png', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']},
            {name: 'getting.in', link: 'http://getting-in.ca', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
            {name: 'getting.in2', link: 'http://getting-in.ca', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
            {name: 'getting.in3', link: 'http://getting-in.ca', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
            {name: 'Umlify2', link: 'http://www.umlify.com', imgPath: '/img/umlify_thumbnail.png', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']},
            {name: 'Umlify3', link: 'http://www.umlify.com', imgPath: '/img/umlify_thumbnail.png', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']}

        ]
    return (
        <div className="bg-gray-600 mt-16">
            sadsa
        </div>
    )
}

export default Projects;
