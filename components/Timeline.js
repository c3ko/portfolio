import React from 'react';

/*
function Timeline({ itemsList }) {
    return (
        <div className="relative w-1/3 m-8 text-indigo-800">
            <div className="border-r-2 border-purple-800 absolute h-full top-0" style={{left: "15px"}}></div>
            <ul className="list-none m-0 p-0">
                { itemsList.map(item => (
                <li key={item.name} className="mb-12">
                    <div className="flex items-center mb-1">
                        <div className="bg-purple-800 rounded-full h-8 w-8"></div>
                
                <div className="flex-1 ml-4 font-semibold">{`${item.start} -- ${item.end}`}</div>
                </div>
                <div className="ml-12">
                    <p className="font-bold text-md">{item.name}</p>
                    <p className="mt-2 font-medium">{item.program}</p>
                </div>
                
                </li>)) }

            </ul>
        </div>
    )
}
*/

function Timeline({ title, itemsList }){

    return (
        <div className="mx-auto relative m-8 text-center">
            <h2 className="text-purple-900 font-semibold text-2xl">{title}</h2>
            <ul className="timeline">
                {itemsList.map(item => (
                    <li className="event" data-date={`${item.start} -- ${item.end}`}>
                        <p>{`${item.start} - ${item.end}`}</p>
                        <h3 className="mb-2">{item.name}</h3>
                        <p>{item.program}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Timeline;
