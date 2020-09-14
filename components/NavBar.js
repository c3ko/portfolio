import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

import Link from 'next/link'


function NavBarItem( { name, clickHandler }) {

    return (
            <li className="nav-item mr-6 py-4 h-full">

                <Link href={`#${name.toLowerCase()}`}>
                    <a  onClick={clickHandler} className=" nav-link text-center uppercase h-full">
                        { name }
                    </a>
                </Link>

            </li>
    )
}

function NavBar() {

    const [ menuOpen, setMenuOpen ] = useState(false)


    const [{ y }, set] = useSpring(() => ({ config: { duration: 450}, y: 0, }))

    function onChange(isVisible) {
        if (isVisible)
            set({ y: 100, opacity: 1 })
        else
            set({ y: 0, opacity: 0 })
    }

    const links = ['Home', 'About', 'Projects', 'Experience', 'Blog', 'Contact']

    
    return (
        <nav className={`${menuOpen ? 'fixed h-screen' : 'sticky'} top-0 w-full z-50`}>
            <ul
                style={{}}
                className={`hidden navbar w-full sm:items-center text-center flex-col sm:flex-row sm:flex bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400`}
            >
                {links.map(link => <NavBarItem key={link} name={link}/>)}
            </ul>
            <div className={`${menuOpen ? 'hidden' : ''} sm:hidden navbar w-full items-center flex bg-purple-800 text-gray-100 flex-no-wrap justify-center border-b-4 border-purple-400`}>
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(true)
                    }}
                    className="menu-button font-extrabold text-lg"
                >
                    MENU
                </button>
            </div>

            <ul
                className={`${menuOpen ? 'flex': 'hidden'} h-screen sm:hidden bg-purple-800 text-gray-100 z-100 flex-col text-center justify-center items-center`}
            >
                <button 
                    onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(false)
                    }}
                    className="self-end mr-8 mt-4 -mb-3"
                >
                    CLOSE
                </button>
                {links.map(link => 
                    <NavBarItem clickHandler={(e) => setMenuOpen(false)} key={`${link}-0`} name={link}/>
                )}
            </ul>
        </nav>

    )
}

export default NavBar;
