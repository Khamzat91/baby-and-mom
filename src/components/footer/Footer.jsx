import React from "react";
import { ReactComponent as Phone } from "../../images/content/phone.svg";
import { ReactComponent as Whatsup } from "../../images/content/whatsup.svg";
import { ReactComponent as Messenger } from "../../images/content/messenger.svg";
import { ReactComponent as Mail } from "../../images/content/mail.svg";
import { ReactComponent as Wach } from "../../images/content/wach.svg";
import { ReactComponent as Twitter } from "../../images/content/twitter.svg";
import { ReactComponent as Instagram } from "../../images/content/instagram.svg";
import { ReactComponent as Facebook } from "../../images/content/facebook.svg";
import { ReactComponent as Youtube } from "../../images/content/youtube.svg";
import logo from "../../images/content/logo.png";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__contacts">
            <div className="footer__contacts-title">Контакты</div>
            <div className="footer__contacts-box">
          <div className="footer__contacts-phone">
            <Phone />
            <a href="tel:380974356743">+38 097 435 6743</a>
          </div>
          <div className="footer__contacts-messengeres">
            <Whatsup className="footer__contacts-messengeres__whatsup" />
            <Messenger className="footer__contacts-messengeres__messenger" />
          </div>
          </div>
          <div className="footer__contacts-email">
            <Mail className="footer__contacts-mail"/>
            <a href="#">Kidsshop@gmail.com</a>
          </div>
          <div className="footer__contacts-wach">
            <Wach />
            <span>Пн-Пт: 9:00 - 17:00</span>
          </div>
        </div>
        <div className="footer__main">
            <div className="footer__main-title">Меню сайта</div>
            <div className="footer__main-wrapper">
          <ul className="footer__link-left">
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Оплата и доставка</a>
            </li>
            <li>
              <a href="#">Возврат и гарантийный ремонт</a>
            </li>
            <li>
              <a href="#">Защита личных данных</a>
            </li>
            <li>
              <a href="#">Бренды</a>
            </li>
          </ul>
          <ul className="footer__link-right">
            <li>
              <a href="#">Правила покупки</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="footer__social">
            <div className="footer__social-title">Социальные сети</div>
            <div className="footer__social-inner">
          <div className="footer__apps">
            <Twitter className="footer__apps-twitter" />
            <Instagram className="footer__apps-instagram" />
            <Facebook className="footer__apps-facebook" />
            <Youtube className="footer__apps-youtube" />
          </div>
          <a href="#"><img src={logo} alt="" className="footer__apps-logo" /></a>
          
        </div>
        </div>
      </div>
      <div className="footer__bottom"><span>2011-2022</span> Все права защищены</div>
    </div>
  );
};

export default Footer;
