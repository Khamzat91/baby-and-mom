import React from "react";
import wallpaper1 from "../../images/wallpaper1.png";
import wallpaper2 from "../../images/wallpaper2.png";
import wallpaper3 from "../../images/wallpaper3.png";
import "./index.scss";

export const Wallpaper = () => {
  return (
    <div className="wallpaper">
      <div className="wallpaper__image">
        <img src={wallpaper1} alt="" />
      </div>
      <div className="wallpaper__images">
        <img src={wallpaper2} alt="" />
        <img src={wallpaper3} alt="" />
      </div>
    </div>
  );
};

export default Wallpaper;
