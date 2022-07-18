import React from 'react';
import logo from "../../images/content/logo.png";
import phone from "../../images/content/phone.svg";
import email from "../../images/content/email.svg";
import "./index.scss";

const HeaderNavigate = () => {
  return (
    <div className="navigate">
      <div className="navigate__wrapper">
        <div className="navigate__wrapper-logo">
          <a href="#">
            <img src={logo} alt="logo"/>
          </a>
        </div>
        <ul className="navigate__wrapper-list">
          <li>
            <a href="#">
              О нас
            </a>
          </li>
          <li>
            <a href="#">
              Оплата и доставка
            </a>
          </li>
          <li>
            <a href="#">
              Отзывы
            </a>
          </li>
          <li>
            <a href="#">
              FAQ
            </a>
          </li>
          <li>
            <a href="#">
              Блог
            </a>
          </li>
          <li>
            <a href="#">
              Контакты
            </a>
          </li>
        </ul>
        <div className="navigate__wrapper-info">
       <div className="navigate__wrapper-phone">
         <img src={phone} alt=""/>
         <a href="tel:380974356743">+38 097 435 6743</a>
       </div>
          <div className="navigate__wrapper-email">
            <img src={email} alt=""/>
            <a href="#">Kidsshop@gmail.com</a>
          </div>
        </div>
        <div className="navigate__wrapper-lang">
          <div className="navigate__wrapper-interpreter active">РУ</div>
          <div className="navigate__wrapper-interpreter">LV</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigate;