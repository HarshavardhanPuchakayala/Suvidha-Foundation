import React from 'react'
import './Footer.css'
import { AiOutlineInstagram,AiFillLinkedin,AiOutlineCopyrightCircle} from "react-icons/ai";
import {BiLogoFacebookCircle,BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    <>
    <footer>
        <section className='FooterSectionOne'>
            <div className='FooterLogo'>
                <img src='./assets/logo.png' className='FooterLogoImg'/>
                <p className='FooterAddress'>Suvidha Mahila Mandal,<br/> Walni Ward No. 1, Jai Bhole Nagar,<br/> Walni, Saone Nagpur,<br/> Maharashtra 441102</p>
            </div>
            <div className='FooterGallery'>
                <h3 className='FooterHeading'>Gallery</h3>
                <a href="">
                <img src='./assets/Gallery.png' className='GalleryImg'/></a>
            </div>
            <div className='FooterLinksOne'>
            <h3 className='FooterHeading'>Useful links</h3>
                <ul>
                    <li>About Us</li>
                    <li>Help Now</li>
                    <li>Events</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                    <li>Verify Your Certificate</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='FooterLinksTwo'>
            <h3 className='FooterHeading'>Certificates</h3>
                <ul>
                    <li>80G Certificate</li>
                    <li>12A Certificate</li>
                    <li>CSR Certificate</li>
                    <li>Suvidha Darpan Registration</li>
                    <li>Suvidha Pan Card</li>
                </ul>
            </div>
        </section>
        <section className='FooterSectionTwo'>
            <div className='CopyRights'>
            <AiOutlineCopyrightCircle/>  <p className='FooterCopyightsText'>  All Right Reserved 2023<span>Suvidha Foundation</span></p>
            </div>
            <div className='SocialMediaIcons'>
            <AiOutlineInstagram className='icon'/>
            <BiLogoFacebookCircle className='icon'/>
            <AiFillLinkedin className='icon'/>
            <BiLogoTwitter className='icon'/>
            </div>
        </section>
</footer>
    </>
  )
}
