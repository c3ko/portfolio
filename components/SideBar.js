import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring/';

import Link from 'next/link'
import WorkIcon from '../public/img/briefcase.svg'
import AboutIcon from '../public/img/intro.svg'
import SkillsIcon from '../public/img/computer.svg'
import EduIcon from '../public/img/college.svg'
import ResumeIcon from '../public/img/papers.svg'
import ProjectsIcon from '../public/img/presentation.svg'
import ContactIcon from '../public/img/envelope.svg'

function NavBarItemIcons( { name, children }) {
    return (
            <li className="mb-4">
                <Link href={name == 'About Me' ? 'about' : `/${name.toLowerCase()}`}>
                    <a>
                        {children}
                    </a>
                </Link>
            </li>
    )
}

function NavBar() {

    const linkIcons = [{name: 'About Me', component: AboutIcon}, {name: 'Work', component: WorkIcon}, {name: 'Skills', component: SkillsIcon}, 
        {name: 'Training', component: EduIcon }, {name: 'Resume', component: ResumeIcon}, {name: 'Projects', component: ProjectsIcon},
        {name: 'Contact', component: ContactIcon}
    ]
    const iconClassName = "h-6 w-6 fill-current text-gray-800 hover:text-green-400"
    return (
        <nav className="fixed top-0 left-0 h-full">
            <ul className=" pt-4 flex flex-col justify-center mr-4 ml-4 h-full">
                    <li className="mb-auto list-none h-28 w-28"><img src="/img/logo.png" alt="Logo"/></li>
                    <div className="mb-auto mt-4">
                    { linkIcons.map(link => (       
                        <NavBarItemIcons key={link.name} name={link.name}>
                            {React.createElement(link.component, {key: link.name, className: iconClassName})}
                        </NavBarItemIcons>
                        
                    )) }
                    </div>
            </ul>
        </nav>

    )
}

export default NavBar;
