import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customerCard } from "./shopper";
import { ReactComponent as Google } from "../../images/content/google.svg";
import "./index.scss";

const Reviews = () => {
    const settings = {
       
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="reviews">
      <div className="reviews__title">Отзывы покупателей</div>
      <div className="reviews__result">
        Средняя оценка на Google: <span>4,9</span> из 5
      </div>
      <Slider {...settings}>
        {customerCard.map((obj) => (
          <div className="reviews__card">
            <div className="reviews__card-data">
              {<div className="reviews__card-avatar">{obj.avatar ? <img src="" alt=""/> : obj.name[0]}</div>}

              <div className="reviews__card-info">
                <div className="reviews__card-name">{obj.name}</div>
                <div className="reviews__card-box">
                 {obj.technician &&  <div className="reviews__card-technician">
                    {obj.technician} .
                  </div>}
                  <div className="reviews__card-feedback">
                    {obj.feedback} отзыв . 
                  </div>
                  <div className="reviews__card-count">{obj.countImg} фото</div>
                </div>
              </div>
            </div>
            <div className="reviews__card-recency">
              <div className="reviews__card-rating">{obj.rating}</div>
              <div className="reviews__card-age">{obj.age} года назад</div>
            </div>
            <div className="reviews__card-text">{obj.text}</div>
            <div className="reviews__card-img">
              <img src={obj.like} alt="" className="reviews__card-like" />
              <img src={obj.share} alt="" className="reviews__card-share" />
            </div>
            <div className="reviews__card-option">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        ))}
      </Slider>
      <a className="reviews__feedback-all">
        <Google className="reviews__feedback-all__google"/>
        Смотреть все отзывы Google
        </a>
    </div>
  );
};

export default Reviews;
