import React from "react";
import "./css/hero.css";

export const Hero = () => {
  return (
    <div className="hero-section">
      <img src={require("../../img/home/hero.jpeg")} alt="" />
      <div className="hero-word">
        <p className="new-arr">New Arrival</p>
        <p className="heading">
          Discover Our <br />
          New Collection
        </p>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="buy">BUY NOW</button>
      </div>
    </div>
  );
};
