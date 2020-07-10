import React from 'react';
import Link from 'next/link'


function NavBarItemIcons( { name, children }) {
    return (
            <li className="mb-4 m-xs-h:mb-2">
                <Link href={name == 'About Me' ? '#about' : `#${name.toLowerCase()}`}>
                    <a>
                        <span className="nav-item  inline-flex">
                            {children}
                            <div className="bubble-label">{name}</div>    
                        </span>
                    </a>
                </Link>
            </li>
    )
}

function NavBar() {

    const iconClassName = "h-6 w-6 m-xs-h:h-4 m-xs-h:w-4 fill-current text-gray-800 hover:text-green-400"
    return (
        <nav className="nav">
            <ul className="flex flex-no-wrap ">

            </ul>
        </nav>

    )
}

export default NavBar;
