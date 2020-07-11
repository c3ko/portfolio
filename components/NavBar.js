import React from 'react';
import Link from 'next/link'


function NavBarItem( { name }) {
    return (
            <li className="nav-item mr-6 py-4 h-full">
                <Link className="h-full" href={name == 'Blog' ? '' : `#${name.toLowerCase()}`}>
                    <a className="nav-link text-center uppercase h-full">
                        { name }
                    </a>
                </Link>
            </li>
    )
}

function NavBar() {

    const iconClassName = "h-6 w-6 m-xs-h:h-4 m-xs-h:w-4 fill-current text-gray-800 hover:text-green-400"
    const links = ['Home', 'About', 'Projects', 'Training', 'Experience',  'Contact']
    return (
        <nav>
            <ul className="navbar w-full items-center flex flex-col sm:flex-row bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400">
                {links.map(link => <NavBarItem name={link}/>)}
            </ul>
        </nav>

    )
}

export default NavBar;
