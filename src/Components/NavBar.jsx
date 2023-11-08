import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { AiOutlineInstagram,AiFillLinkedin,AiFillPhone,AiFillMail,AiOutlineClose} from "react-icons/ai";
import {BiLogoFacebookCircle,BiLogoTwitter,BiMenu } from "react-icons/bi";
export default function NavBar() {

  return (
    <>
    <nav className='Nav1'>
    <div className='ContactNav'>
        <p className='Number'><AiFillPhone/>+91 7020044091</p>
            <p className='Email'><AiFillMail/>
            <Link to="https://www.google.com/gmail/about/" target='_blank'>
              info@suvidhafoundation.org</Link>
              </p>
              </div>   
                
              <div className='Nav1SocialMediaIcons'>
            <Link to="https://www.instagram.com/suvidha_mahila_mandal/" target='_blank'>
              <AiOutlineInstagram className='icons'/>
              </Link>
            <Link to="https://www.facebook.com/suvidhamahilamandal" target='_blank'>
              <BiLogoFacebookCircle className='icons '/>
              </Link>
            <Link to="https://www.linkedin.com/company/suvidha-foundation/" target='_blank'>
              <AiFillLinkedin className='icons'/>
              </Link>
            <Link to="https://twitter.com/home" target='_blank'>
              <BiLogoTwitter className='icons'/>
              </Link>
              </div>
    </nav>

    </>
  )
}
