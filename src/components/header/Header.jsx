import React from 'react';
import search from "../../images/content/search.svg";
import heart from "../../images/content/heart.svg";
import basket from "../../images/content/basket.svg";
import "./index.scss";


const Header = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__menu active">
          <div className="header__menu-btn">
            <span/>
            <span/>
            <span/>
          </div>
          <div className="header__menu-title">
            Каталог товаров
          </div>
        </div>

        <form>
          <label>
            <img className="header__form-search" src={search} alt=""/>
            <input type="text" placeholder="Введите запрос для поиска"/>
            <button>Найти</button>
          </label>
        </form>

        <div className="header__box">
          <div className="header__box-user">N</div>
          <div className="header__box-heart">
            <img src={heart} alt=""/>
            <span>12</span>
          </div>
          <div className="header__box-basket">
            <img src={basket} alt=""/>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;