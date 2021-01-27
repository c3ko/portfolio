import React from 'react';


function Timeline({ title, itemsList }){

    return (
        <div className="mx-auto relative m-8 text-center">
            <h2 className="text-purple-800 font-semibold text-2xl">{title}</h2>
            <ul className="timeline">
                {itemsList.map(item => (
                    <li key={item.name} className="event" data-date={`${item.start} -- ${item.end}`}>
                        <p className="">{`${item.start} - ${item.end}`}</p>
                        <h3 className="mb-2 text-purple-800">{item.name}</h3>
                        <p>{item.program}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Timeline;
