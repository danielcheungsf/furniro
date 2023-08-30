import React from "react";
import "./css/share.css";

export const Share = () => {
  return (
    <div className="share">
      <div className="title">
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="photo">
        <div className="left">
          <div className="upper">
            <img
              src={require("../../img/home/share_1.png")}
              alt=""
              className="img1"
            />
            <img
              src={require("../../img/home/share_3.png")}
              alt=""
              className="img2"
            />
          </div>
          <div className="lower">
            <img
              src={require("../../img/home/share_2.png")}
              alt=""
              className="img3"
            />
            <img
              src={require("../../img/home/share_4.png")}
              alt=""
              className="img4"
            />
          </div>
        </div>
        <div className="middle">
          <img
            src={require("../../img/home/share_5.png")}
            alt=""
            className="img5"
          />
        </div>
        <div className="right">
          <div className="upper">
            <img
              src={require("../../img/home/share_7.png")}
              alt=""
              className="img6"
            />
            <img
              src={require("../../img/home/share_9.png")}
              alt=""
              className="img7"
            />
          </div>
          <div className="lower">
            <img
              src={require("../../img/home/share_6.png")}
              alt=""
              className="img8"
            />
            <img
              src={require("../../img/home/share_8.png")}
              alt=""
              className="img9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
