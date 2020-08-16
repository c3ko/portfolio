import React from 'react';
import Timeline from './Timeline'
import Skills from './Skills';

function Experience() {
    const schoolList = [
        {name: 'McMaster University', program: 'B.Tech Software Engineering Technology', start: 'Sept. \'20', end: 'Apr. \'22'},
        {name: 'Humber College Institute of Applied Technology', program: 'Computer Engineering Technology', start: 'Sept. \'17', end: 'Apr. \'20'},
    
    ]

    const skillsList = ['Javascript', 'Python', 'Java', 'C/C++', 'Django', 'AWS', 'React', 'Vue']
    
    return (
        <section id="experience" className="py-12">
            <div className="mx-auto w-10/12 max-w-5xl">
                <h2 className="section-heading mx-auto text-purple-800 mb-0">Experience</h2>
                <div className="flex justify-center flex-wrap md:flex-nowrap mx-auto w-11/12">
                    <Timeline schoolsList={schoolList}/>
                    <Skills skillsList={skillsList} />
                </div>
                

            </div>
        </section>
    )
}

export default Experience;
