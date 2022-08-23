import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { navCards, settings } from './navProducts';
import "./index.scss";
import { useCurrentWidth } from './useCurrentWidth';

const Novelty = () => {
  const width = useCurrentWidth();

  return (
    <div className='novelty'>
<div className="novelty__title">Вы уже смотрели</div>
<Slider {...settings}>
{
  navCards.map((card, index) => <div key={index} className="novelty__card">
    <div className='novelty__discount-image'>
    <img src={card.linkSaleImg} alt="" />
    <span>NEW</span>
  </div>
  <div className="novelty__card-image">
    <img src={card.cardImg} alt="" />
  </div>
 
  <div className="novelty__card-heart">{card.heart}</div>
  <div className="novelty__card-priced">
  <div className="novelty__card-price">{card.price}</div>
  {card.priseSale && <div className="novelty__card-prisesale">{card.priseSale}</div>}
  </div>
  <div className="novelty__card-description">{card.description.slice(0, 50)+'...'}</div>
  {card.colors && <div className='novelty__card-coloured'>
  {card.colors
    .filter((color, index) => width <= 480 ? index < 3 : color)
    .map((color) => <div key={color} className="novelty__card-color" style={{backgroundColor: color}}></div>)}
  {card.append && <div className="popular__card-append">{card.append}</div>}
  </div>}
  
  
  <div className="novelty__card-logistics">
    <div className="novelty__card-delivery">{card.delivery}</div>
    <div className="novelty__card-subtitle">{card.subTitle}</div>
  </div>
  <div className="novelty__card-recall">
    <div className="novelty__card-rating">{card.rating}</div>
    <div className="novelty__card-testimonial">{card.testimonial}</div>
    <div className="novelty__card-test">(15)</div>
  </div>
  </div>)
}
</Slider>

    </div>
  )
}


export default Novelty;