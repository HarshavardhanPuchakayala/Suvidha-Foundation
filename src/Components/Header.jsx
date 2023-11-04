import React from 'react'
import './Header.css'
import { AiOutlineInstagram,AiFillLinkedin,AiFillPhone,AiFillMail} from "react-icons/ai";
import {BiLogoFacebookCircle,BiLogoTwitter } from "react-icons/bi";
export default function Header() {
  return (
    <>
    <nav className='Nav1'>
        <div className='ContactNav'>
        <p className='Number'><AiFillPhone/>+91 7020044091</p>
            <p className='Email'><AiFillMail/>info@suvidhafoundation.org</p>
            
        </div>
        <div className='Nav1SocialMediaIcons'>
            <AiOutlineInstagram className='icons'/>
            <BiLogoFacebookCircle className='icons'/>
            <AiFillLinkedin className='icons'/>
            <BiLogoTwitter className='icons'/>
            </div>
    </nav>
    <header className='Header'>
    <nav className="Nav2">
      <label htmlFor="logo" className="logo">
          <img src="./assets/logo.png" alt="SuvidhaFoundationLogo" className="logoImg" />
      </label>
      <ul className="navitems">
        <li>Join us</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      </nav>
    <div className='Slider'>
      <h1 className='HeaderHeading'>Better Care and Better World</h1>
      <p className="HeaderText">You have a good life,some other don't</p>
      <button className='Donate'>Donate</button>
    </div>
    
    </header>
    </>
  )
}
