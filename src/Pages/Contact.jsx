import React from 'react'
import Banner from '../Components/banner'
import './Contact.css'
export default function Contact() {
  return (
        <>
        <section className='ContactBanner'>
                <p className="ContactBannerSubHeading">Contact...</p>
                <h1 className='ContactBannerHeading'>Get in Touch</h1>
        </section>
        <section className='Container'>
            <div className='TreePlantaion'>
                <div className="content">
                    <p className='SideHeading'>Help First...</p>
                    <h1>Tree Plantation</h1>
                    <p className="ContentText">Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</p>
                </div>
                <img src="./assets/TreePlantation.jpg"/>
            </div>
            <div className='ClothDistribution'>
                <img src="./assets/ClothsDistribution.jpg"/>
            <div className="content clothText">
                    <h1>Cloths Distribution</h1>
                    <p className="ContentText">Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</p>
                </div>
            </div>
        </section>

        <section className='FormSection'>
            <div className="FormGrid">
            <div className='HelpWithUs'>
                <h3>Help The People With Us</h3>
                <h1>We'd love to hear from you</h1>
                <p className='Paragrapgh1'>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future.</p>
                <p className='Paragrapgh2'>To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.
To Run Food Donation And Awareness Campaign In Rural Region.</p>
                <p className="paragrapgh3">
                To build Next Generation Entrepreneur, by providing them a Skill-Based Education.
To Provide Internship, Training And Workshops and Quality Education All Over The World.
                </p>
            </div>
            <div className='FormDiv'>
                <h1>Complete The Form</h1>
                <p>Fill Form for Querys </p>
                <form action="">
                    <input type="text"  placeholder='Enter Your Name'required className='Name'/>
                    <input type="text" placeholder='Enter Phone Number' required className='Number'/>
                    <input type="text" placeholder='Enter Your Email Address' required  className='Email'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='Textarea'></textarea>
                    <input type="submit" value="Submit"  className='submit'/>
                </form>
            </div>
            </div>
        </section>
        <Banner/>
        </>
  )
}
