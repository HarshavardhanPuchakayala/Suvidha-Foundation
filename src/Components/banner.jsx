import React from 'react'
import './banner.css'
import {Link} from 'react-router-dom'
export default function Banner() {
  return (
    <>
    <section className='BannerSection'>
        <div className='Banner'>
            <div className="BannerContent">
        <h1 className='BannerHeading'>
        You can contribute to provide a<br/> better place for Better Future!
        </h1>
        <div className="btn">
        <button className='volunteer'>
          <Link to="/Internship">
            join as a volunteer
            </Link>
        </button>
        <button className='donate'>
          <Link to="/Donate">
            Donate
            </Link>
        </button>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}
