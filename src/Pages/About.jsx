import React from 'react'
import './About.css'
import { AiOutlineInstagram,AiFillLinkedin,AiOutlineLine} from "react-icons/ai";
import {BiLogoFacebookCircle,BiLogoTwitter } from "react-icons/bi";
import Banner from '../Components/banner'
import Collaboration from '../Components/Collaboration'
export default function About() {
  return (
    <>
    <section className='Aboutbanner'>
        <h5 className='AboutbannerSubHeading'>
            What We Do...
        </h5>
        <h1 className='AboutbannerHeading'>
        About our<br/>
Organization
        </h1>
    </section>

    <section className='KnowAboutUs'>
        <h5 className='KnowAboutUsSideHeading'>
            <AiOutlineLine className='Line'/> Know About Us
        </h5>
        <div className='KnowAboutUsFlex'>
        <div className='KnowAboutUSHeading'>
            <h1>We are a non-profit organization</h1>
        </div>
        <div className='KnowAboutUsContent'>
            <h6 className='KnowAboutUsSubHeading'>Suvidha Foundation<br/> (Suvidha Mahila Mandal)</h6>
            <p className="KnowAboutUsText">Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
        </div>
        </div>
    </section>

    <section className='MissionVision'>
        <div className='MVGrid'>
            <div className="OurMission">
                <h5>OUR MISSION</h5>
                <p>Inspire students, fostering innovation, and promoting integration for a brighter future.
Empower the youth to lead, innovate, and collaborate, shaping the next generation.
Dedicated to running food donation and raising awareness in underserved rural areas.
Our mission: combating hunger and building a strong sense of community.
Transforming lives with sustenance and knowledge, together we thrive.
Join us in creating a world where innovation meets compassion, one meal at a time.</p>
            </div>
            <div className="OurVision">
                <h5>OUR VISION</h5>
                <p>To empower the next generation of entrepreneurs, we are dedicated to offering skill-based education that equips them with the tools and
                     knowledge needed to succeed. Our mission extends beyond traditional learning; we provide global access to quality education through internships,
                      training, and workshops. Our commitment is to make a positive impact worldwide, nurturing talent and fostering innovation. With a focus on 
                      skill development, we aim to unlock opportunities for aspiring entrepreneurs and professionals from diverse backgrounds.
                       </p>
            </div>
        </div>
        <div className='MVImg'>
            <img src="./assets/GroupImg.jpg" alt="groupImg" />
        </div>
    </section>
    <Collaboration/>

<section className='TeamSection'>
<h1 className='TeamHeading'>Meet our team</h1>
    <p className="TeamSubHeading">Awesome guys behind our charity activities</p>
    <div className="TeamGrid">
        <div className='Profile'>
            <img src="./assets/Secretary.jpeg"/>
            <div className='TeamContent'>
            <h1>Shobha Motghare</h1>
            <p>Secretary</p>
            <span className='GroupIcons'>
            <AiOutlineInstagram className='icon'/>
                <BiLogoFacebookCircle className='icon'/>
                <AiFillLinkedin className='icon'/>
                <BiLogoTwitter className='icon'/>
            </span>
            </div>
        </div>
        <div className='Profile'>
            <img src="./assets/President.jpg"/>
            <div className='TeamContent'>
            <h1>Payal Badhe</h1>
            <p>President</p>
            <span className='GroupIcons'>
            <AiOutlineInstagram className='icon'/>
                <BiLogoFacebookCircle className='icon'/>
                <AiFillLinkedin className='icon'/>
                <BiLogoTwitter className='icon'/>
            </span>
            </div>
        </div>
        <div className='Profile'>
            <img src="./assets/Treasurer.jpg"/>
            <div className='TeamContent'>
            <h1>Bharti Shendre</h1>
            <p>Treasurer</p>
            <span className='GroupIcons'>
            <AiOutlineInstagram className='icon'/>
                <BiLogoFacebookCircle className='icon'/>
                <AiFillLinkedin className='icon'/>
                <BiLogoTwitter className='icon'/>
            </span>
            </div>
        </div>
        <div className='Profile'>
            <img src="./assets/Advisor.jpg"/>
            <div className='TeamContent'>
            <h1>Nilima Kalambe</h1>
            <p>Advisor</p>
            <span className='GroupIcons'>
            <AiOutlineInstagram className='icon'/>
                <BiLogoFacebookCircle className='icon'/>
                <AiFillLinkedin className='icon'/>
                <BiLogoTwitter className='icon'/>
            </span>
            </div>
        </div>
   </div>

    </section>
    <Banner/>
    </>
  )
}
