import React from 'react'
import {ReactComponent as Auth} from '../../images/content/auth.svg';
import {ReactComponent as Registration} from "../../images/content/registration.svg";
import search from "../../images/content/search.svg";
import heart from "../../images/content/heart.svg";
import basket from "../../images/content/basket.svg";
import "./index.scss";

const HeaderRegistration = () => {
  return (
    <div className="header__registration">
    <label>
        <img className="header__form-search" src={search} alt=""/>
        <input type="text" placeholder="Введите запрос для поиска"/>
        <button>Найти</button>
      </label>
      <Auth className="header__registration-auth"/>
      <div className="header__registration-logout">
        <div className="header__registration-text">Войти</div>
        <div className="header__registration-title">
        Регистрироватся
        <Registration className="header__registration-arrowreg"/>
        </div>
      </div>
      <div className="header__box-heart">
        <img src={heart} alt=""/>
      </div>
      <div className="header__box-basket">
        <img src={basket} alt=""/>
      </div>
    </div>
  )
}

export default HeaderRegistration;