import React from 'react';
import Skills from './Skills'
import ProgressBar from './ProgressBar'

function About() {

    const skillsList =  [
        {label: 'Python', confidence: '80%'},
        {label: 'Javascript', confidence: '80%'},
        'Javascript', 'Python', 'Java', 'Spring Boot', 'C/C++', 'Django', 'AWS', 'React', 'Vue'
    ]
    

    return (
        <section id="about" className="about-section py-12">

            <h2 className="section-heading mx-auto text-purple-800 mb-0">About Me</h2>
            <div className="flex flex-col justify-center items-center lg:flex-row  mx-auto w-10/12 mt-8">
                <div className="w-1/2 mx-auto mb-8 lg:mr-8 ">
                    <p className="text-2xl leading-normal whitespace-normal font-thin text-indigo-900 "> 
                    I'm an aspiring software developer and recent graduate of the Computer Engineering Technology program at Humber College. My hope is that I can join a team where I
                    </p>
                </div>

                <div className="w-3/4 lg:1/3">
                    <ProgressBar label="Java" number={80} />
                    <ProgressBar label="Python" number={80} />
                    <ProgressBar label="Javascript" number={70} />
                    <ProgressBar label="html" number={70} />
                    <ProgressBar label="css" number={70} />

                </div>

            </div>


        </section>
    )
}

export default About;
