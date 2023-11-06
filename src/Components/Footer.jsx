import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import { AiOutlineInstagram,AiFillLinkedin,AiOutlineCopyrightCircle} from "react-icons/ai";
import {BiLogoFacebookCircle,BiLogoTwitter } from "react-icons/bi";

export default function Footer() {
  return (
    <>
    <footer>
        <section className='FooterSectionOne'>
            <div className='FooterLogo'>
            <Link to="/"> <img src='./assets/logo.png' className='FooterLogoImg'/></Link>
                <p className='FooterAddress'>Suvidha Mahila Mandal,<br/> Walni Ward No. 1, Jai Bhole Nagar,<br/> Walni, Saone Nagpur,<br/> Maharashtra 441102</p>
            </div>
            <div className='FooterGallery'>
                <h3 className='FooterHeading'>Gallery</h3>
                <Link to="/Gallery"><img src='./assets/Gallery.png' className='GalleryImg'/></Link>
            </div>
            <div className='FooterLinksOne'>
            <h3 className='FooterHeading'>Useful links</h3>
                <ul>
                <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/Donate">Help Now</Link></li>
                <li><Link to="/Event">Events</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="https://suvidhafoundationedutech.org/verify.php" target='_blank'>Verify Your Certificate</Link></li>
                    <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className='FooterLinksTwo'>
            <h3 className='FooterHeading'>Certificates</h3>
                <ul>
                    <li>
                        <Link to="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf" target='_blank'>
                        80G Certificate
                        </Link>
                        </li>
                    <li>
                    <Link to="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf" target='_blank'>
                        12A Certificate
                        </Link>
                        </li>
                    <li>
                    <Link to="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF" target='_blank'>
                        CSR Certificate
                        </Link>
                        </li>
                    <li>
                    <Link to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf" target='_blank'>
                        Suvidha Darpan Registration
                        </Link></li>
                    <li>
                    <Link to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf" target='_blank'>
                        Suvidha Pan Card
                        </Link></li>
                </ul>
            </div>
        </section>
        <hr/>
        <section className='FooterSectionTwo'>
            <div className='CopyRights'>
            <AiOutlineCopyrightCircle className='copyrightIcon'/>  <p className='FooterCopyightsText'>  All Right Reserved 2023<span>Suvidha Foundation</span></p>
            </div>
            <div className='SocialMediaIcons'>
            <Link to="https://www.instagram.com/suvidha_mahila_mandal/" target='_blank'>
            <AiOutlineInstagram className='icon'/>
            </Link>
            <Link to="https://www.facebook.com/suvidhamahilamandal" target='_blank'>
            <BiLogoFacebookCircle className='icon'/>
            </Link>
            <Link to="https://www.linkedin.com/company/suvidha-foundation/" target='_blank'>
            <AiFillLinkedin className='icon'/>
            </Link>
            <Link to="https://twitter.com/home" target='_blank'>
            <BiLogoTwitter className='icon'/>
            </Link>
            </div>
        </section>
</footer>
    </>
  )
}
