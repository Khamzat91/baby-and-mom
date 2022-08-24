import React from "react";
import { ReactComponent as Clock } from "../../images/content/clock.svg";
import "./index.scss";

const AboutDiscounts = () => {
  return (
    <div className="about-discounts">
      <div className="about-discounts__image">
        <div className="about-discounts__test">
        <div className="about-discounts__title">
          Получайте информацию о скидках первыми
        </div>
        <div className="about-discounts__text">
          Оформите подписку и вы будете вкурсе всех наших выгодных акций и
          скидок
        </div>
        <div className="about-discounts__form">
          <input type="text" placeholder="Ваша электронная почта" />
          <button>
            <Clock />
            Оформить подписку
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutDiscounts;
