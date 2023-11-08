import React from 'react'
import {Link} from 'react-router-dom'
import Banner from '../Components/banner'
import './Internship.css'
export default function Internship() {
  return (
    <>
        <section className='InternshipBanner'>
            <div className="Content">
                <p className="ApplyInternshipHeader">Join us...</p>
                <h1 className='ApplyInternshipSubHeading'>Join Our Impactful Internship Program and Make a Difference.</h1>
               <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdPAVP_An-H2y9DgR9kgmMrroeBk3kZJVUR93IC1vJevWM6BA/viewform" target='_blank' className='ApplyNow'>Apply Now For Internship</Link>
            </div>
        </section>
        <section className='IntershipMain'>
                <div className="InternMeet">
                    <img src='./assets/Meet.jpg'/>
                    <div className='InternContent'>
                        <h1>Student Internship and Mentorship Programs.</h1>
                        <p>At Suvidha Foundation, we offer a range of free internship opportunities, both technical and non-technical, as well as social work programs. Our internship programs aim to provide valuable hands-on experience to students and individuals, allowing them to contribute to our organization's initiatives and projects.</p>
                    </div>
                </div>
        </section>
        <section className='Review'>
        <div className='InternReview'>
                    <h1 className="Qoute">"Suvidha Foundation NGO stands out for its impactful programs, commitment to empowerment, collaborative approach, transparency, and diverse range of initiatives. It provides a meaningful platform for individuals to contribute their skills and make a real difference in society."</h1>
                   <span><img src="./assets/profile.jpg" alt="" /> Soumya Sharma</span> 
                </div>
        </section>
        <section className='IntershipMain'>
        <div className="InternMeet">
                    <div className='InternContent'>
                        <h1>Why You Should Apply for This Internship.</h1>
                        <p>Student internship and mentorship program at our NGO Suvidha Foundation (Suvidha Mahila Mandal) offers valuable opportunities for students to gain practical experience, contribute to meaningful projects, and receive guidance from experienced professionals in the nonprofit sector.During a student internship, individuals have the chance to work closely with the NGO's team, understanding its mission, values, and operations.</p>
                    </div>
                    <img src='./assets/Intern.jpg'/>
                </div>
        </section>
        <Banner/>
    </>
  )
}
