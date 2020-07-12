import React from 'react';


function ProjectItem({ projectInfo }) {
    return (
        <></>
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
        <section id="projects" className="bg-gray-100 text-purple-800 py-20 fix-margin">
            <div className="mx-auto w-3/4">
                <h2 className="section-heading fix-margin">Projects</h2>
            </div>
        </section>
    )
}

export default Projects;
