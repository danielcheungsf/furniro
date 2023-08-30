import React from "react";
import "./css/product.css";

export const Product = () => {
  return (
    <div className="home-product">
      <div className="title">
        <h1>Our Products</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_syltherine.png")}
              alt=""
              className="max-width"
            />
          </div>
          <div className="description">
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <p className="price">Rp 2.500.000</p>
            <p className="ori-price">Rp 3.500.000</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_leviosa.png")}
              alt=""
              className="max-width"
            />
          </div>
          <div className="description">
            <h4>Leviosa</h4>
            <p>Stylish cafe chair</p>
            <p className="price">Rp 2.500.000</p>
            <p className="ori-price"></p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_lolito.png")}
              alt=""
              className="max-height"
            />
          </div>
          <div className="description">
            <h4>Lolito</h4>
            <p>Luxury big sofa</p>
            <p className="price">Rp 7.000.000</p>
            <p className="ori-price">Rp 14.000.000</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_respira.jpeg")}
              alt=""
              className="max-height"
            />
          </div>
          <div className="description">
            <h4>Respira</h4>
            <p>Outdoor bar table and stool</p>
            <p className="price">Rp 500.000</p>
            <p className="ori-price"></p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_grifo.png")}
              alt=""
              className="max-width"
            />
          </div>
          <div className="description">
            <h4>Grifo</h4>
            <p>Night lamp</p>
            <p className="price">Rp 1.500.000</p>
            <p className="ori-price"></p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_muggo.png")}
              alt=""
              className="max-height"
            />
          </div>
          <div className="description">
            <h4>Muggo</h4>
            <p>Small mug</p>
            <p className="price">Rp 150.000</p>
            <p className="ori-price"></p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_pingky.jpeg")}
              alt=""
              className="max-height"
            />
          </div>
          <div className="description">
            <h4>Pingky</h4>
            <p>Cute bed set</p>
            <p className="price">Rp 7.000.000</p>
            <p className="ori-price">Rp 14.000.000</p>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img
              src={require("../../img/home/product_syltherine.png")}
              alt=""
              className="max-width"
            />
          </div>
          <div className="description">
            <h4>Syltherine</h4>
            <p>Stylish cafe chair</p>
            <p className="price">Rp 2.500.000</p>
            <p className="ori-price"></p>
          </div>
        </div>
      </div>
      <button className="show">Show More</button>
    </div>
  );
};
