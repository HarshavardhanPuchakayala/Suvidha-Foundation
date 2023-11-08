import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './TestNavBar.css'
export default function TestNavBar() {
    const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
    const NavData=[
        {name:'Join us',link:"/Internship"},
        {name:'About Us',link:"/About"},
        {name:'Events',link:"/Event"},
        {name:'Gallery',link:"/Gallery"},
        {name:'Contact',link:'/Contact'}
      ];
  return (
    <>
    <header>

    <nav className='Navbar2 TransNav'>
                <label htmlFor="logo">
                    <Link to='/'>
                    <img src="./assets/logo.png" alt="logo" />
                    </Link>
                </label>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {showNavbar ? <AiOutlineClose className='NavIcon'/> : <GiHamburgerMenu className='NavIcon'/>}
                </div>

                <div  className={`nav-elements ${showNavbar && "active"}`}>
                    <ul>
                            {NavData.map((item)=>(
                                <li>
                                    <Link to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            
           
        </nav>
    </header>
    </>
  )
}
