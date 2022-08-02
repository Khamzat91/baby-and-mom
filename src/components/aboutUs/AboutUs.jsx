import React from 'react';
import aboutBasket from "../../images/aboutBasket.png";
import { ReactComponent as Read } from "../../images/content/read.svg";
import "./index.scss";

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className="about-us__inner">
        <div className="about-us__inner-info">
          <div className="about-us__inner-info__title">
          О нас
         <img src={aboutBasket} alt="" />
         </div>  
         <div className="about-us__inner-info__text">
         <span>Bērnu veikals </span> — это огромный интернет-магазин для малышей и их родителей.
          Для нас главный приоритет — это комфорт и безопасность для Вас и Ваших драгоценных крошек ♥.
           Наш интернет-магазин всегда под рукой и Вы в любое время суток можете заказывать товары, 
           которые мы наиболее быстрым и удобным для Вас способом доставим по всей территории Балтии.
            Bērnu Veikals обеспечивает большим выбором товаров наилучшего качества по доступным ценам,
             мы заботимся не только о качестве, но и о вашем кошельке 👛, ведь мы…
         </div>
         <div className="about-us__inner-info__read">
            Читать подробнее
            <Read className='about-us__inner-info__arrow'/>
         </div>
        </div>
        <div className="about-us__inner-image">
            <div className="about-us__inner-image__title">Забота о малышах и мамах</div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs;