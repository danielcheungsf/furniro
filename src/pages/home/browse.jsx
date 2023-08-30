import React from "react";
import "./css/browse.css";

export const Browse = () => {
  return (
    <div className="browse">
      <div className="title">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <div className="box">
          <div className="img">
            <img src={require("../../img/home/browse_dining.png")} alt="" />
          </div>
          <p>Dining</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={require("../../img/home/browse_living.png")} alt="" />
          </div>
          <p>Living</p>
        </div>
        <div className="box">
          <div className="img">
            <img src={require("../../img/home/browse_bedroom.png")} alt="" />
          </div>
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
};
