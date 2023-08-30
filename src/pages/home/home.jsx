import React from "react";
import { Hero } from "./hero";
import { Browse } from "./browse";
import { Product } from "./product";
import { Inspire } from "./inspire";
import { Share } from "./share";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Browse />
      <Product />
      <Inspire />
      <Share />
    </div>
  );
};
