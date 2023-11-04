import React from 'react'
import './Mission.css'
export default function Misson() {
  return (
    <>
    <section className='Mission'>
        <div className="MissionIMGContainer">
            <img src="./assets/HomeAbout.jpg" alt="HomeAbout" className="MissionImg" />
        </div>
        <div className="MissionContent">
            <h1 className="MissionHeading">About Us</h1>
            <p className="missionText">Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future.The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.
</p>
            <button className='ABoutUs'>Learn More</button>
        </div>
    </section>
    </>
  )
}
