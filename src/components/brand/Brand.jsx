import React from "react";
import { brandCards } from "./brendProduct";
import { ReactComponent as BrandArrow } from "../../images/content/brand-arrow.svg";
import "./index.scss";

export const Brand = () => {
  return (
    <div className="brand">
      <div className="brand__title">Бренды</div>
      <div className="brand-ad">
        {brandCards.map((obj) => (
          <div className="brand-ad__images">
            <div className="brand-ad__image">
              <img src={obj.linkBrandImg} alt="" />
            </div>
            <div className="brand-ad__title">{obj.title}</div>
          </div>
        ))}
      </div>
      <div className="brand__all">
        <button>Смотреть все бренды</button>
        <BrandArrow />
      </div>
    </div>
  );
};

export default Brand;
