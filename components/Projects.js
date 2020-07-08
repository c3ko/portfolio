import React from 'react';
import IMACScreen from './IMACScreen'

function StackUsedBar() {
    const stackList = [{name: 'React', icon: null}, {name: 'Vue', icon: null}, {name: 'Spring Boot'}]
}


function ProjectItem({ projectInfo }) {

    return (
        <li class="border-2 border-transparent cursor-pointer hover:border-green-400 md:max-w-sm sm:w-auto w-full rounded overflow-hidden m-4 bg-white shadow-lg">
            <img class="w-full" src={projectInfo.imgPath} alt={projectInfo.name} />
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{projectInfo.name}</div>
                <p class="text-gray-700 text-base">
                {projectInfo.excerpt}
                </p>
            </div>
            <div class="px-6 py-4">
                {projectInfo.tagsList.map((tag, index) => <span className={"inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700" + (projectInfo.tagsList.length === index + 1 ? "" : " mr-4")}>{tag}</span>)}

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
            {name: 'getting.in23', link: 'http://getting-in.ca', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']}

        ]
    return (
        <div className="mt-16 md:w-auto mx-auto w-full">
            <h2 id="projects" className="text-3xl text-gray-800 uppercase font-bold mb-8">Projects</h2>
                <ul className="flex flex-wrap">
                    { projectsList.map(project => <ProjectItem key={project.name} projectInfo={project} />) }
                </ul>

        </div>
    )
}

export default Projects;
