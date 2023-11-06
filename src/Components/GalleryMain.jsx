import React from 'react'

export default function GalleryMain(props) {
  return (
    <>
    <div className="GalleryItem">
        <img src={props.item.img} className='GalleryItemimg'/>
        <h1 className='GalleryItemName'>{props.item.name}</h1>
    </div>
    </>
  )
}
