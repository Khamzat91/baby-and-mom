import React, { useRef } from "react";
import search from "../../images/content/search.svg";
import heart from "../../images/content/heart.svg";
import basket from "../../images/content/basket.svg";
import "./index.scss";
import Catalog from "./Catalog";
import { catalogs } from "./constants";
import HeaderRegistration from "./HeaderRegistration";

const Header = () => {
  const [idMouseMove, setIdMouseMove] = React.useState(null);
  const [activeCatalogs, setActiveCatalogs] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(false);
  const [auth, setAuth] = React.useState(null);

  const handleClickSubCatalogs = () => {
    if (idMouseMove) {
      setIdMouseMove(true);
    } else {
      setIdMouseMove(null);
    }
  };

  const handleClassActive = () => {
    if (activeIndex) {
      setActiveIndex(false);
      setActiveCatalogs(null);
    } else {
      setActiveIndex(true);
    }
  };

 const handleClickAuth = () => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
 }

  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__inner-bottom">
          <div className={"header__menu " + (activeIndex ? "active" : "")}>
            <div onClick={handleClassActive} className="header__menu-btn">
              <span />
              <span />
              <span />
            </div>
            <div onClick={handleClassActive} className="header__menu-btn__off">
              <span />
              <span />
            </div>
            <div className="header__menu-title">Каталог товаров</div>
          </div>
          {activeIndex && (
            <Catalog
              activeCatalogs={activeCatalogs}
              setActiveCatalogs={setActiveCatalogs}
            />
          )}
        </div>
        <div className="header__wrapper">
          {auth ? (
            <form>
              <label>
                <img className="header__form-search" src={search} alt="" />
                <input type="text" placeholder="Введите запрос для поиска" />
                <button>Найти</button>
              </label>

              <div className="header__box">
                <div className="header__box-user">N</div>
                <div className="header__box-heart">
                  <img src={heart} alt="" />
                  <span>12</span>
                </div>
                <div className="header__box-basket">
                  <img src={basket} alt="" />
                  <span>1</span>
                </div>
              </div>
            </form>
          ) : (
            <HeaderRegistration handleClickAuth={handleClickAuth} />
          )}
          {activeIndex && activeCatalogs !== null && (
            <div className="catalog__item-subcatalogs">
              {handleClickSubCatalogs &&
                catalogs[activeCatalogs]?.subCatalogs.map(
                  ({ title, subCatalogsTitle }, index) => (
                    <ul key={index}>
                      <li className="catalog__item-subcatalogs__title">
                        {title}
                      </li>
                      {subCatalogsTitle.map((catalogList, index) => (
                        <li key={index} className="catalog__item-subcatalogs__catalog-list">
                          {catalogList}
                        </li>
                      ))}
                    </ul>
                  )
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
