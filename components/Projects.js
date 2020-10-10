import React from 'react'
import { useSpring, animated } from 'react-spring'

function ProjectItem({ project}) {
    const [{ scale }, set] = useSpring(() => ({ scale: '1.0'}))

    return (
        <animated.li
            style={{transform: scale.interpolate(v => `scale(${v})`)}} 
            onMouseEnter={() => {
                set({scale: '1.04'})
            }} 
            onMouseLeave={() => set({scale: '1.0'})}
            className="project-item mx-2 mb-4 flex flex-col flex-no-wrap border-2 border-purple-500 bg-white"
        >
            <img className="border-b border-gray-600" src={project.imgPath} alt={project.name}/>
            <span className="flex justify-between mx-2 text-lg">
                <div>{project.name}</div>
                <a target="_blank" href={project.link}>Open</a>
            </span>
            <p className="w-3/4 mx-auto py-4">
                {project.excerpt}
            </p>
            <span className="flex flex-wrap">
                { project.tagsList.map(tag => <div key={tag} className="border border-gray-300 "></div>) }
            </span>
        </animated.li>
    )
}


function Projects() {


    const projectsList = [{name: 'Umlify', link: 'http://umlify.com', imgPath: '/img/umlify_thumbnail.png', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']},
            {name: 'Getting.in (Under Construction)', link: 'https://gpa-calc.vercel.app/', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
        ]

    return (
        <section id="projects" className="text-purple-800 py-12 fix-margin">
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
