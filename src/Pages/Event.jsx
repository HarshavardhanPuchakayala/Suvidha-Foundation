import React from 'react'
import './Event.css'
import data from '../Components/data'
import EventMain from '../Components/EventMain'
import Banner from '../Components/banner'
export default function Event() {
    const EventData=data.map(item=>{
        return(
            <EventMain
            key={item}
            item={item}/>
        )
    })
  return (
    <>
    <section className='EventHeadersection'>
        <div className="Eventbanner">
            <h3 className='EventbannersubHeading'>Donation...</h3>
            <h1 className="EventbannerHeading">Events</h1>
        </div>
        <div className='EventHeading'>
            <h1>Our Events</h1>
        </div>
    </section>
    <section className='EventMain'>
        {EventData}
    </section>
    <Banner/>
    </>
  )
}
