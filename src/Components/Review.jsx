import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviewData from '../Components/ReviewData'
export default function Review() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };
  return (
  <>
   <div className="Reviews">
  <Slider {...settings}>
  {ReviewData.map(item=>(
    <div className="Card">
      <div className="CardContent">
        <img src={item.img}/>
          <h2>{item.name}</h2>
          <p>{item.text}</p>
          </div></div>
          ))}
          </Slider>
          </div>
          </>
  )
}
