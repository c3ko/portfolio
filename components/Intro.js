import React from 'react';

function Intro() {
    return (

            <section id="home" className="content" >
                <div className="large-header text-center flex justify-center align-middle">
                    <h1 className="font-thin uppercase m-auto text-xl sm:text-4xl text-gray-100">
                        Hi, I'm <span className="font-bold text-red-500">Mohamed.</span>
                        <br />
                        <span className=""> I'm a Full Stack Developer.</span>
                        <br />
                        <span className="flex flex-wrap items-center text-sm justify-center w-full mt-8">
                            <a className="" href="#projects"><button className="btn mr-4 hover:bg-teal-600 focus:border-green-900 focus:border-4 hover:border-transparent">See My Work</button></a>
                            <a className="" href="#contact"><button className="btn mr-4 hover:bg-teal-600 focus:border-green-900 focus:border-4 hover:border-transparent">Contact Me</button></a>
                        </span>
                    </h1>
                </div>
            </section>

            
    )
}

export default Intro;
