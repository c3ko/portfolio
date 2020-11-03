import React from 'react';
import Timeline from './Timeline'



function Experience() {
    const schoolList = [
        {name: 'McMaster University', program: 'B.Tech Software Engineering Technology (Part-Time/Evenings)', start: 'Sept. \'20', end: 'Present'},
        {name: 'Humber College', program: 'Computer Engineering Technology', start: 'Sept. \'17', end: 'Apr. \'20'},
    
    ]

    const workList = [
        {name: 'Developer for Hire', program: 'Currently Seeking Work', start: 'May. \'20', end: 'Present'},
        
    ]

    return (
        <section id="experience" className="py-12">
            <div className="mx-auto w-10/12 max-w-5xl">
                <h2 className="section-heading mx-auto text-purple-800 mb-0">Experience</h2>
                <div className="flex justify-center flex-wrap md:flex-nowrap mx-auto w-11/12">
                    <Timeline title="Education" itemsList={schoolList}/>
                    <Timeline title="Work" itemsList={workList} />
                </div>

            </div>
        </section>
    )
}

export default Experience;
