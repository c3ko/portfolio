import React from 'react';
import GithubIcon from '../public/img/github.svg'
import InstagramIcon from '../public/img/instagram.svg'
import LinkedInIcon from '../public/img/linkedin.svg'
function Intro() {
    const socialIconStyling = "h-12 w-12 p-2 fill-current text-gray-800 hover:text-green-500"
    return (

            <section className="content" >
                <div className="large-header text-center flex justify-center align-middle">
                    <h1 className="font-thin uppercase m-auto text-3xl sm:text-4xl text-gray-100">
                        Hi, I'm <span className="font-bold text-red-500">Mohamed.</span>
                        <br />
                        <span className=""> I'm a Full Stack Developer.</span>
                        <br />
                        <span className="flex flex-wrap items-center text-sm justify-center w-full mt-8">
                            <button className="btn mr-4 hover:bg-teal-600 focus:border-green-900 focus:border-4 hover:border-transparent">See My Work</button>
                            <button className="btn hover:bg-teal-600 hover:border-transparent">More About Me</button>
                            </span>


                    </h1>
                </div>
            </section>

            
    )
}

export default Intro;
