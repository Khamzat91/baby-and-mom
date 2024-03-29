import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {goodsCards} from "../popular/goods";
import { useCurrentWidth } from '../novelty/useCurrentWidth';
import "./index.scss";

const Popular = () => {
  const width = useCurrentWidth();
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className='popular'>
<div className="popular__title">Популярные товары</div>
<Slider {...settings}>
{
  goodsCards.map((card, index) => <div key={index} className="popular__card">
    <div className='popular__discount-image'>
    <img src={card.linkSaleImg} alt="" />
    <span>Хит!</span>
  </div>
  <div className="popular__card-image">
    <img src={card.cardImg} alt="" />
  </div>
 
  <div className="popular__card-heart">{card.heart}</div>
  <div className="popular__card-priced">
  <div className="popular__card-price">{card.price}</div>
  {card.priseSale && <div className="popular__card-prisesale">{card.priseSale}</div>}
  </div>
  <div className="popular__card-description">{card.description.slice(0, 50)+'...'}</div>
  {card.colors && <div className='popular__card-coloured'>
  {card.colors.filter((color, index) => width <= 480 ? index < 3 : color)
  .map((color, index) => <div key={index} className="popular__card-color" style={{backgroundColor: color}}></div>)}
  {card.append && <div className="popular__card-append">{card.append}</div>}
  </div>}
  
  
  <div className="popular__card-logistics">
    <div className="popular__card-delivery">{card.delivery}</div>
    <div className="popular__card-subtitle">{card.subTitle}</div>
  </div>
  <div className="popular__card-recall">
    <div className="popular__card-rating">{card.rating}</div>
    <div className="popular__card-testimonial">{card.testimonial}</div>
    <div className="novelty__card-test">(15)</div>
  </div>
  </div>)
}
</Slider>

    </div>
  )
}


export default Popular;