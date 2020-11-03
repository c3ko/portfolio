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
            className="project-item mx-2 mb-4 flex flex-col flex-no-wrap justify-center border-2 border-purple-500 bg-white max-w-md"
        >
            <img className="border-b border-gray-600 h-64" src={project.imgPath} alt={project.name}/>
            <span className="flex flex-wrap ml-2 my-2">
                { project.tagsList.map(tag => <div key={tag} className="border px-2 py-1 mr-2 bg-purple-800 text-gray-100 border-gray-300 ">{tag}</div>) }
            </span>
            <div className="w-3/4 mx-auto text-center">
            
                <p className="ml-2 text-lg">
                    {project.name}
                </p>
                <div className="mt-2 ml-2">
                        {!project.link ? <></> : <a className="mr-2 border shadow-md font-medium hover:bg-purple-700 hover:text-gray-100 border-purple-400 px-2 py-1" target="_blank" href={project.link}>Open</a>}
                        <a className="border shadow-md font-medium hover:bg-purple-700 hover:text-gray-100 border-purple-400 px-2 py-1" target="_blank" href={project.src}>Source</a>
                </div>
                <p className=" py-4">
                    {project.excerpt}
                </p>
            </div>

        </animated.li>
    )
}


function Projects() {


    const projectsList = [{name: 'Umlify', link: 'http://umlify.com', imgPath: '/img/umlify_thumbnail.png', src: 'https://github.com/c3ko/umlify.com', excerpt: 'Generate UML class diagrams from Java source code.',
            tagsList: ['React', 'Spring Boot']},
            {name: 'Getting.in (Under Construction)', link: 'https://gpa-calc.vercel.app/', src: 'https://github.com/c3ko/gpa-calc', imgPath: '/img/gettingin_thumbnail.png', excerpt: 'Calculate OMSAS GPA for Ontario medical schools.', tagsList: ['Vue.JS', 'Tailwind CSS']},
            {name: 'Parts Crib Management System', link: null, imgPath: '/img/parts-crib.jpg', src: 'https://github.com/c3ko/Parts-Crib-Android', excerpt: 'Android Application and internal Web Portal for tracking rentals and inventory of electronic equipment.', tagsList: ['Android', 'React','Material-UI', 'Firebase']}
        
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
