import React, { Component } from "react";
import Slider from "react-slick";
import {ReactComponent as Prev} from "../../images/content/prev.svg";
import {ReactComponent as Next} from "../../images/content/next.svg";
import momBaby from "../../images/momBaby.png";
import baby from "../../images/baby.png";
import beast from "../../images/beast.png";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        
        <div className="slider-presentation">
          <div className="slider-presentation__images">
            <div className="slider-presentation__image">
              <div className="slider-presentation_image-perform">
              <img src={momBaby} alt="" />
              </div>
              <div className="slider-presentation__image-arrows">
              <Prev/>
              <Next/>
              </div>
            </div>
            <div className="slider-presentation__all">
            <img src={baby} alt="" />
            <img src={beast} alt="" />
            </div>
          </div>
        </div>
      
        </Slider>
      </div>
    );
  }
}