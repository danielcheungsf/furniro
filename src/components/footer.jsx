import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="info">
          <p className="logo">Funiro.</p>
          <p className="address">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="break"></div>
        <div className="links">
          <p className="title">Links</p>
          <a href="*">Home</a>
          <a href="*">Shop</a>
          <a href="*">About</a>
          <a href="*">Contact</a>
        </div>
        <div className="break"></div>
        <div className="help">
          <p className="title">Help</p>
          <a href="*">Payment Options</a>
          <a href="*">Returns</a>
          <a href="*">Privacy Policies</a>
        </div>
        <div className="newsletter">
          <p className="title">Newsletter</p>
          <form action="">
            <input
              type="text"
              className="email"
              placeholder="Enter Your Email Address"
            />
            <input type="submit" className="btn" value="SUBSCRIBE" />
          </form>
        </div>
        <div className="break"></div>
      </footer>
      <div className="footnote">
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};
