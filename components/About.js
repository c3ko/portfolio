import React from 'react';
import Skills from './Skills'

function About() {

    const skillsList = ['Javascript', 'Python', 'Java', 'Spring Boot', 'C/C++', 'Django', 'AWS', 'React', 'Vue']

    return (
        <section id="about" className="about-section py-12">

            <h2 className="section-heading mx-auto text-purple-800 mb-0">About Me</h2>
            <div className="flex flex-wrap mx-auto w-10/12">
                <p className="mt-8 flex-half text-xl font-medium text-gray-800 w-3/4 mx-auto"> 
                   I'm an aspiring software developer and recent graduate of the Computer Engineering Technology program at Humber College. My hope is that I can join a team where I
                </p>
                <Skills skillsList={skillsList} />

            </div>


        </section>
    )
}

export default About;
