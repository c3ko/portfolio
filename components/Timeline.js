import React from 'react';

function Timeline({ schoolsList }) {
    return (
        <div className="relative w-1/2 m-8">
        <div className="border-r-2 border-purple-800 absolute h-full top-0" style={{left: "15px"}}></div>
        <ul className="list-none m-0 p-0">
            { schoolsList.map(school => (
            <li className="mb-12">
                <div className="flex items-center mb-1">
                    <div className="bg-purple-800 rounded-full h-8 w-8"></div>
            <div className="flex-1 ml-4 font-medium">{`${school.start} -- ${school.end}`}</div>
                </div>
                <div className="ml-12">
                    <p className="font-semibold text-md">{school.name}</p>
                    <p className="mt-2">{school.program}</p>
                </div>
            </li>)) }

        </ul>
        </div>
    )
}

export default Timeline;
