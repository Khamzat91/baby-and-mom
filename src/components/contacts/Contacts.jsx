import React from "react";
import aboutBasket from "../../images/aboutBasket.png";
import { ReactComponent as Mesage } from "../../images/content/mesage.svg";
import "./index.scss";

 const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__image">
        <div className="contacts__info">
          <div className="contacts__info-title">
            <img src={aboutBasket} alt="" />
            Свяжитесь с нами
          </div>
          <div className="contacts__info-text">
            Отправьте нам сообщение и мы ответим в ближайшее время
          </div>
          <div className="contacts__info-form">
            <label>
              <input type="text" placeholder="Ваше имя*" />
            </label>
            <label>
              <input type="text" placeholder="Телефон" />
            </label>
            <label>
              <input type="text" placeholder="Электронная почта*" />
            </label>
            <label className="contacts__info-form__area">
              <textarea placeholder="Текст сообщения*" />
              <p>*обязательные поля</p>
            </label>
            <label className="contacts__info-form__checkbox">
              <input type="checkbox" />
              <p> Я согласен(-на) с <span>правилами</span>
              о обработке моих персональных данных</p>
            </label>
            <div className="contacts__info-form__btn">
              <Mesage className="contacts__info-form__mesage" />
              Отправить сообщение
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
