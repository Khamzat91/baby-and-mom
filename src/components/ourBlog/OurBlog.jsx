import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scroll from "../../images/scroll.png";
import chat from "../../images/chat.png";
import { ReactComponent as BtnArrow } from "../../images/content/btnArrow.svg";
import { sliderCard } from "./ourBlogSlider";
import "./index.scss";

const OurBlog = () => {
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: true,
          verticalSwiping: true
        }
      }
    ]
  };

  const handleClichScroll = () => {
    return window.scrollTo(0, 0);
  };

  return (
    <div className="our-blog">
      <div className="our-blog__image">
        <img
          onClick={handleClichScroll}
          src={scroll}
          alt=""
          className="our-blog__image-scroll"
        />
        <img src={chat} alt="" className="our-blog__image-chat" />
        <div className="our-blog__image-title">Наш блог</div>

        <Slider {...settings}>
          {sliderCard.map((obj) => (
            <div className="our-blog__slider">
              <img src={obj.ourImg} alt="" className="our-blog__slider-image" />
              <div className="our-blog__slider-data">
                <div className="our-blog__slider-data__date">{obj.date}</div>
                <div className="our-blog__slider-data__title">{obj.title}</div>
                <div className="our-blog__slider-data__text">{obj.text.slice(0,50)+'...'}</div>
                <div className="our-blog__slider-data__more">
                  <div className="our-blog__slider-data__read">{obj.read}</div>
                  <div className="our-blog__slider-data__readArrow">
                    {obj.readArrow}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="our-blog__btn">
          Читать блог
          <BtnArrow className="our-blog__btnArrow" />
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
