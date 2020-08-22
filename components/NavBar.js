import React from 'react';
import Link from 'next/link'

function NavBarItem( { name }) {

    return (
            <li className="nav-item mr-6 py-4 h-full">

                <Link href={`#${name.toLowerCase()}`}>
                    <a className=" nav-link text-center uppercase h-full">
                        { name }
                    </a>
                </Link>

            </li>
    )
}

function NavBar() {

    const links = ['Home', 'About', 'Projects', 'Experience', 'Blog', 'Contact']
    return (
        <nav className="sticky top-0 z-50">
            <ul className="hidden navbar w-full items-center sm:flex bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400">
                {links.map(link => <NavBarItem key={link} name={link}/>)}
            </ul>
            <div className="sm:hidden navbar w-full items-center flex bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400">
                <button className="menu-button font-extrabold text-lg">
                    MENU
                </button>
            </div>

        </nav>

    )
}

export default NavBar;
