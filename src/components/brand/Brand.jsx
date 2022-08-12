import React from "react";
import { brandCards } from "./brendProduct";
import { ReactComponent as BrandArrow } from "../../images/content/brand-arrow.svg";
import "./index.scss";

const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__title">Бренды</div>
      <div className="brand-ad">
        <div className="brand-ad__images">
          {brandCards.map((obj) => (
            <div className="brand-ad__image">
              <div className="brand-ad__img">
                <img src={obj.linkBrandImg} alt="" />
              </div>
              <div className="brand-ad__title">{obj.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="brand__all">
        <button>Смотреть все бренды</button>
        <BrandArrow className="brand__all-arrow"/>
      </div>
    </div>
  );
};

export default Brand;
