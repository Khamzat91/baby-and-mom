import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Looking = () => {
  return (
    <div className='looking'>
<div className="Looking__title">Вы уже смотрели</div>
<Slider {...settings}>

</Slider>

    </div>
  )
}


export default Looking;