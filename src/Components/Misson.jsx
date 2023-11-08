import React from 'react'
import './Mission.css'
import { FaPaw,FaRegSmileBeam,FaTree,FaLaptop,FaHome } from 'react-icons/fa';
import { PiBowlFoodFill } from 'react-icons/pi';
import { GiPlantWatering,GiTeacher } from 'react-icons/gi';
import { RiMentalHealthLine } from 'react-icons/ri';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import Collaboration from '../Components/Collaboration'
import Review from './Review';
import {Link} from 'react-router-dom';
export default function Misson() {
  return (
    <>

  <header className='Header'>
      <div className='Slider'>
      <h1 className='HeaderHeading'>Better Care for Better World</h1>
      <p className="HeaderText">You have a good life,some other don't</p>
      <Link to="/Donate" className='Donate'>Donate</Link>
    </div>
</header>

    <section className='Mission'>
        <div className="MissionIMGContainer">
            <img src="./assets/HomeAbout.jpg" alt="HomeAbout" className="MissionImg" />
        </div>
        <div className="MissionContent">
            <h1 className="MissionHeading">About Us</h1>
            <p className="missionText">Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future.The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.
</p>
         
            <Link to="/About" className='ABoutUs'>
                Learn More
                </Link>
               
        </div>
    </section>


    <section className='WorkWithUs'>
        <div className='InternshipContent'>
        <h1 className='InternshipHeading'>Apply For Internship<br/> &<br/> Become a Member</h1>
        <p className='InternshipText'>The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and Work with us.</p>

            <Link to="/Internship" className='Internship'>
            Apply Now
            </Link>

        </div>
    </section>

    <section className='whatWedo'>
        <div className='whatWedoContent'>
            <h1 className='SubHeading'>What we do..?</h1>
            <h1 className='Heading'>We do it for Better Future</h1>
        </div>
        <div className='WhatWeDoGrid'>
            <div className='WhatWeDoElement'>
            <PiBowlFoodFill className='WhatWeDoIcon'/>
                <p className='GridHeading'>
                Healthy Food
                </p>
                <p className='GridText'>
                By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.
                </p>
            </div>
            <div className='WhatWeDoElement'>
                <FaHome className="WhatWeDoIcon"/>
                <p className='GridHeading'>
                Social Awareness
                </p>
                <p className='GridText'>
                We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.
                </p>
            </div>
            <div className='WhatWeDoElement'>
                <GiPlantWatering className='WhatWeDoIcon'/>
                <p className='GridHeading'>
                Tree Plantation
                </p>
                <p className='GridText'>
                Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.
                </p>
            </div>
            <div className='WhatWeDoElement'>
                <MdOutlineHealthAndSafety className="WhatWeDoIcon"/>
                <p className='GridHeading'>
                Health Care
                </p>
                <p className='GridText'>
                We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.
                </p>
            </div>
            <div className='WhatWeDoElement'>
                <GiTeacher className='WhatWeDoIcon'/>
                <p className='GridHeading'>
                Primary Education
                </p>
                <p className='GridText'>
                By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.
                </p>
            </div>
            <div className='WhatWeDoElement'>
                <RiMentalHealthLine className="WhatWeDoIcon"/>
                <p className='GridHeading'>
                Social Care
                </p>
                <p className='GridText'>
                Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals
                </p>
            </div>
        </div>
    </section>

    <section className='banner'>
        <div className="bannerContainer">
            <FaPaw className='bannerIcon'/> 
            <p className='bannerNumber'>1200<span>+</span></p>
            <p className='bannerName'>Donation</p></div>
        <div className="bannerContainer">
            <FaRegSmileBeam className='bannerIcon'/>
            <p className='bannerNumber'>2000<span>+</span></p>
            <p className='bannerName'>Volunteers</p></div>
        <div className="bannerContainer">
            <FaLaptop className='bannerIcon'/>
            <p className='bannerNumber'>600<span>+</span></p>
            <p className='bannerName'>Internship</p></div>
        <div className="bannerContainer">
            <FaTree className='bannerIcon'/>
            <p className='bannerNumber'>1cr<span>+</span></p>
            <p className='bannerName'>TreesPlanted</p></div>
    </section>


    <section className='Events'>
        <div className='EventContent'>
            <h1 className='EventHeading EventSubHeadingHome'>
                Our Events
            </h1>
            <p className="EventText">
            Celebrating Our Impact Together
            </p>
        </div>
        <div className='EventGrid'>
            <div className='Eventone'>
                <div className="EventImg">
                <img src='./assets/TreePlantation.jpg'/>
                </div>
                <div className="EventGridContent">
                    <h1 className='EventGridHeading'>
                            Tree Plantation
                    </h1>
                    <p className='EventGridText'>
                    Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.
                    </p>
                    <span className='EventDate'>
                        <p className="date">
                            JUL 15
                        </p>
                    </span>
                </div>
                
            </div>

            <div className='Eventone'>
                <div className="EventImg">
                <img src='./assets/Fundraising.jpg'/>
                </div>
                <div className="EventGridContent">
                    <h1 className='EventGridHeading'>
                    Fundraising Events
                    </h1>
                    <p className='EventGridText'>
                    Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.
                    </p>
                    <span className='EventDate'>
                        <p className="date">
                            JUL 15
                        </p>
                    </span>
                </div>
                
            </div>

            <div className='Eventone'>
                <div className="EventGridContent">
                    <h1 className='EventGridHeading'>
                    Food Donation
                    </h1>
                    <p className='EventGridText'>
                    Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.
                    </p>
                    
                    <span className='EventDate ExtraDate1'>
                        <p className="date">
                            JUL 15
                        </p>
                    </span>
                </div>
                <div className="EventImg">
                <img src='./assets/Food.jpg'/>
                </div>
            </div>

            <div className='Eventone'>
                <div className="EventGridContent">
                    <h1 className='EventGridHeading'>
                    Cloths Distribution
                    </h1>
                    <p className='EventGridText'>
                    Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.
                    </p>
                    <span className='EventDate ExtraDate'>
                        <p className="date">
                            JUL 15
                        </p>
                    </span>
                </div>
                <div className="EventImg">
                <img src='./assets/ClothsDistribution.jpg'/>
                </div>
            </div>
        </div>
    </section>

    <Collaboration/>

    <section className='ReviewHome'>
        <h1 className="ReviewHeading">
        What People Say About Us..?
        </h1>
        <Review/>
    </section>
    </>
  )
}
