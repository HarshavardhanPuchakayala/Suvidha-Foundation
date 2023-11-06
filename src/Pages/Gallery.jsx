import React from 'react'
import Data from '../Components/Gallerydata'
import GalleryMain from '../Components/GalleryMain'
import Banner from '../Components/banner'
import './Gallery.css'
export default function Gallery() {
    const GalleryDetails=Data.map(item=>{
        return(
            <GalleryMain
            key={item}
            item={item}/>
        )
    })
  return (
    <>
    <section className='GalleryHeaderSection'>
        <div className='Gallerybanner'>
            <h3 className='GallerybannerSubHeading'>
                Gallery...
            </h3>
            <h1 className="GallerybannerHeading">
            Meet our Charity<br/>
Projects
            </h1>
        </div>
        <div className="GalleryHeading">
            <h1>Our Gallery</h1>
        </div>
    </section>
    <section className='GalleryMain'>
        {GalleryDetails}
    </section>
    <Banner/>
    </>
  )
}
