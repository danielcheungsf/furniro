import React from "react";
import "./quality.css";
import { ReactComponent as TrophyIcons } from "../img/icon/trophy.svg";
import { ReactComponent as GuaranteeIcons } from "../img/icon/guarantee.svg";
import { ReactComponent as SupportIcons } from "../img/icon/customer-support.svg";
import { ReactComponent as ShipIcons } from "../img/icon/shipping.svg";
export const Quality = () => {
  return (
    <div className="quality">
      <div className="container">
        <TrophyIcons />
        <div className="description">
          <p className="title">High Quality</p>
          <p className="body">crafted from top materials</p>
        </div>
      </div>
      <div className="container">
        <GuaranteeIcons />
        <div className="description">
          <p className="title">Warranty Protection</p>
          <p className="body">Over 2 years</p>
        </div>
      </div>
      <div className="container">
        <ShipIcons />
        <div className="description">
          <p className="title">Free Shipping</p>
          <p className="body">Order over 150 $</p>
        </div>
      </div>
      <div className="container">
        <SupportIcons />
        <div className="description">
          <p className="title">24 / 7 Support</p>
          <p className="body">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};
