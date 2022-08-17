import React from "react";
import { ReactComponent as Auth } from "../../images/content/auth.svg";
import { ReactComponent as Registration } from "../../images/content/registration.svg";
import { ReactComponent as SearchAdap } from "../../images/content/search-adap.svg";
import logo from "../../images/content/logo.png";
import search from "../../images/content/search.svg";
import heart from "../../images/content/heart.svg";
import basket from "../../images/content/basket.svg";
import "./index.scss";

const HeaderRegistration = ({ handleClickAuth }) => {
  const [btnList, setBtnList] = React.useState(false);

  const toggleList = () => {
    if (!btnList){
      setBtnList(true)
    }else{
      setBtnList(false)
    }
  }

  return (
    <div className="header__registration">
      <label>
        <img className="header__form-search" src={search} alt="" />
        <input type="text" placeholder="Введите запрос для поиска" />
        <button>Найти</button>
      </label>
      <Auth className="header__registration-auth" />
      <div className="header__registration-logout">
        <div onClick={handleClickAuth} className="header__registration-text">
          Войти
        </div>
        <div className="header__registration-title">
          Регистрироватся
          <Registration className="header__registration-arrowreg" />
        </div>
      </div>
      <div className="header__box-main">
        <div className="header__box-main__left">
      <div onClick={toggleList} className="header__box-btnAd">
        <span />
        <span />
        <span />
       {btnList && <ul className="header__box-btnList">
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
        </ul>}
      </div>
      <div className="header__box-logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        </div>
      </div>
      <div className="header__box-main__right">
      <SearchAdap className="header__box-searchAdap"/>
      <div className="header__box-heart">
        <img src={heart} alt="" />
      </div>
      <div className="header__box-basket">
        <img src={basket} alt="" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default HeaderRegistration;
