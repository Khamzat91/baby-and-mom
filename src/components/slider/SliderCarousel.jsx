import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { photoCarousel } from "./photo";

const SliderCarousel = () => {
    var settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
    <div className='slider-carousel'>
     <Slider {...settings}>
    {
        photoCarousel.map((carouselImg, index) => <div key={index} className="slider-carousel__images">
        <div className="slider-carousel__image">
            <img src={carouselImg.linkImg} alt="" />
        </div>
        </div>)
    }
     </Slider>   
    </div>
  )
}


export default SliderCarousel;