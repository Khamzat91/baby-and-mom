import React from 'react';
import diamond from "../../images/content/diamond.jpg";
import group from "../../images/content/group.jpg";
import delivery from "../../images/content/delivery.jpg";
import discount from "../../images/content/discount.jpg";

const Commercial = () => {
  return (
    <div className='commercial'>
    <div className="commercial__item">
        <img src={diamond} alt="" />
        <div className="commercial__item__title">Гарантия качества</div>
    </div>
    <div className="commercial__item">
        <img src={group} alt="" />
        <div className="commercial__item__title">Огромный ассортимент</div>
    </div>
    <div className="commercial__item">
        <img src={delivery} alt="" />
        <div className="commercial__item__title">Быстрая доставка</div>
    </div>
    <div className="commercial__item">
        <img src={discount} alt="" />
        <div className="commercial__item__title">Выгодные цены и бонусы</div>
    </div>
    </div>
  )
}


export default Commercial;