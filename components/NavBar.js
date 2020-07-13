import React from 'react';
import Link from 'next/link'


function NavBarItem( { name }) {
    return (
            <li className="nav-item mr-6 py-4 h-full">
                <Link href={name == 'Blog' ? '' : `#${name.toLowerCase()}`}>
                    <a className="nav-link text-center uppercase h-full">
                        { name }
                    </a>
                </Link>
            </li>
    )
}

function NavBar() {

    const links = ['Home', 'About', 'Projects', 'Training', 'Blog', 'Contact']
    return (
        <nav className="sm:sticky sm:top-0">
            <ul className="navbar w-full items-center flex flex-col sm:flex-row bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400">
                {links.map(link => <NavBarItem key={link} name={link}/>)}
            </ul>
        </nav>

    )
}

export default NavBar;
