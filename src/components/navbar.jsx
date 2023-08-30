import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {
  ShoppingCart,
  MagnifyingGlass,
  Heart,
  UserCircle,
} from "phosphor-react";

export const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={require("../img/icon/logo.png")} alt="" />
          <p>Furniro</p>
        </div>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="control">
        <Link to="/profile">
          <UserCircle size={28} />
        </Link>
        <Link to="/search">
          <MagnifyingGlass size={28} />
        </Link>
        <Link to="/saved">
          <Heart size={28} />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={28} />
        </Link>
      </div>
    </header>
  );
};
