import React from 'react';
import GithubIcon from '../public/img/github.svg'
import InstagramIcon from '../public/img/instagram.svg'
import LinkedInIcon from '../public/img/linkedin.svg'
function Intro() {
    const socialIconStyling = "h-12 w-12 p-2 fill-current text-gray-800 hover:text-green-500"
    return (
            <div className="mt-16 border-2 rounded-md border-green-500 px-16 py-8 mx-8">
                <span class="flex justify-between flex-col sm:flex-row">
                    <h1 className="text-gray-800 text-4xl leading-tight font-bold">Hi, I'm <span className="text-green-500">Mohamed.</span></h1>
                    <ul className="inline-flex">
                        <li className=""><a href="https://github.com/c3ko" target="_blank"><GithubIcon className={socialIconStyling} /></a></li>
                        <li className=""><a href="https://github.com/c3ko" target="_blank"><InstagramIcon className={socialIconStyling} /></a></li>
                        <li className=""><a href="https://github.com/c3ko" target="_blank"><LinkedInIcon className={socialIconStyling} /></a></li>

                    </ul>
                </span>
                <p className="py-4 text-gray-700 text-xl">I'm a Toronto based full-stack developer focused on building and maintaining web and mobile applications. My current toolset is
                primarily React/React-Native and ASP.NET Core/Django. I enjoy finding solutions to real world problems, and using my knowledge of both web and database technologies to 
                create a more seamless user experience.
                </p>
            </div>
    )
}

export default Intro;
