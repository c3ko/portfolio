import React from 'react';
import Skills from './Skills'
import ProgressBar from './ProgressBar'

function About() {

    return (
        <section id="about" className="about-section py-10">
            <h2 className="section-heading mx-auto text-purple-800 mb-0">About Me</h2>
            <div className="flex flex-col justify-center items-center xl:flex-row  mx-auto w-10/12 mt-8">
                <div className=" mx-auto mb-8 xl:mr-8 ">
                    <p className="text-3xl text-indigo-900 border-l-8 pl-4 border-indigo-900 font-bold mb-4">Mission-driven software developer with a passion for learning new concepts.</p>
                    <p className="text-2xl leading-normal whitespace-normal font-thin text-indigo-900 mb-4"> 
                    I'm an aspiring software developer and current Software Engineering Technology student at McMaster University. Whether it's working on 
                    building backend APIs, client-side Single Page Applications or deploying cloud infrastructure in AWS/Azure/Digital-Ocean, I always look to broaden my working knowledge of
                    current tools and look forward to learning new ones.

                    </p>
                </div>
                <div className="w-3/4 lg:1/3">
                    <ProgressBar label="html" number={90} />
                    <ProgressBar label="Java" number={90} />
                    <ProgressBar label="Go" number={70} />
                    <ProgressBar label="Python" number={80}/>
                    <ProgressBar label="React" number={80} />
                    <ProgressBar label="Android" number={80} />
                    <ProgressBar label="Javascript" number={70} />
                    <ProgressBar label="css" number={70} />
                    <ProgressBar label="Spring Boot" number={60} />
                    <ProgressBar label="C#" number={60} />
                    <ProgressBar label="ASP.NET Core" number={60} />
                    <ProgressBar label="Django" number={60} />

                </div>
            </div>
        </section>
    )
}

export default About;
