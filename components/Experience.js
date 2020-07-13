import React from 'react';
import Timeline from './Timeline'

function Experience() {
    const schoolList = [
        {name: 'McMaster University', program: 'B.Tech Software Engineering Technology', start: 'Sept. \'20', end: 'Apr. \'22'},
        {name: 'Humber College Institute of Applied Technology', program: 'Computer Engineering Technology', start: 'Sept. \'17', end: 'Apr. \'20'},
    
    ]

    const skillsList = ['Javascript', 'Python', 'Java', 'C/C++', 'Django', 'React', 'Vue']
    
    return (
        <section id="training" className="bg-gray-100 py-12">
            <div className="mx-auto w-10/12">
                <h2 className="section-heading mx-auto text-purple-800 mb-0">Experience</h2>
                <div className="flex flex-wrap">
                    <Timeline schoolsList={schoolList}/>
                </div>
                

            </div>
        </section>
    )
}

export default Experience;
