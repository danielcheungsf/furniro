import React from "react";
import "./header2.css";
import { Link, useLocation } from "react-router-dom";
import { CaretRight } from "phosphor-react";

export const Header2 = () => {
  const wordByRoute = {
    "/shop": "Shop",
    "/comparison": "Comparison",
    "/cart": "Cart",
    "/checkout": "Checkout",
    "/contact": "Contact",
    "/blog": "Blog",
    "/about": "About",
  };

  const location = useLocation();
  const currentPath = wordByRoute[location.pathname] || "Unknown";

  return (
    <div className="header2">
      <div className="info">
        <img src={require("../img/icon/logo.png")} alt="" />
        <h1>{currentPath}</h1>
        <p>
          <span>
            <Link to="/">Home</Link>
            <CaretRight size={20} />
          </span>
          {currentPath}
        </p>
      </div>
      <div className="overlay"></div>
      <img src={require("../img/otherhero.jpeg")} className="hero" />
    </div>
  );
};
