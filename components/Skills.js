import React from 'react';

function Skills({ skillsList }) {
    return (
        <div className=" w-5/12">
            <ul className="flex content-start flex-wrap m-8">
                { skillsList.map(skill => (
                    <li className="skills-tag text-center px-4 py-2 mr-3 mb-2 border border-gray-400 bg-gray-200 text-gray-900">
                        {skill}
                    </li>
                ) ) }
            </ul>
        </div>
    )
}

export default Skills;
