import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { saleCards } from '../sale/discounts';
import { ReactComponent as Append } from '../../images/content/append.svg';
import "./index.scss";

const Sale = () => {
  const settings = {
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
    <div className='sale'>
<div className="sale__title">Акции и скидки</div>
<Slider {...settings}>
{
  saleCards.map((card, index) => <div key={index} className="sale__card">
    <div className='sale__discount-image'>
    <img src={card.linkSaleImg} alt="" />
    <span>50%</span>
  </div>
  <div className="sale__card-image">
    <img src={card.cardImg} alt="" />
  </div>
 
  <div className="sale__card-heart">{card.heart}</div>
  <div className="sale__card-priced">
  <div className="sale__card-price">{card.price}</div>
  {card.priseSale && <div className="sale__card-prisesale">{card.priseSale}</div>}
  </div>
  <div className="sale__card-description">{card.description}</div>
  {card.colors && <div className='sale__card-coloured'>
    <div className="sale__card-wrapper"> 
  {card.colors.map((color, index) => <div key={index} className="sale__card-color" style={{backgroundColor: color}}></div>)}
  </div>
  {card.append && <div className="popular__card-append">{card.append}</div>}
  </div>}
  
  <div className="sale__card-logistics">
    <div className="sale__card-delivery">{card.delivery}</div>
    <div className="sale__card-subtitle">{card.subTitle}</div>
  </div>
  <div className="sale__card-recall">
    <div className="sale__card-rating">{card.rating}</div>
    <div className="sale__card-testimonial">{card.testimonial}</div>
  </div>
  </div>)
}
</Slider>

    </div>
  )
}


export default Sale;