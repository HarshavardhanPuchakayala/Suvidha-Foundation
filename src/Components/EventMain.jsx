import React from 'react'
export default function EventMain(props) {
  return (
    <>
     <div className="EventItem">
        <img src={props.item.img} className='EventItemimg'/>
        <h1 className='EventItemName'>{props.item.name}</h1>
        <p className='EventItemText'>{props.item.text}</p>
    
    <div className="EventDate">
      <h1 className='EventDay'>{props.item.date}</h1>
      <p className="EventMonth">{props.item.Month}</p>
    </div>
    </div>
    </>
  )
}
