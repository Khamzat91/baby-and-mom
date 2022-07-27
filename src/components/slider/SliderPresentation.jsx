import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { photoDigital } from './photo';
import baby from "../../images/baby.png"
import beast from "../../images/beast.png"

 const SliderPresentation = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <div className='slider-presentation'>
     <Slider {...settings}>
      {photoDigital.map((slideImg,index) => <div key={index} className="slider-presentation__images">
              <div className="slider-presentation__image">
              <img src={slideImg.linkImg} alt=""/> 
              </div>
          </div>)}
        </Slider>
        <div className="slider-presentation__right">
        <img src={baby} alt="" />
        <img src={beast} alt="" />
        </div>
   </div>
  )
}

export default SliderPresentation;