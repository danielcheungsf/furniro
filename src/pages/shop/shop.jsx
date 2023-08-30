// import React from "react";
// import { PRODUCTS } from "../../product";
// import { Product } from "./product";
// import "./shop.css";

// export const Shop = () => {
//   return (
//     <div className="shop">
//       <div className="shopTitle">{/* <h1>Daniel's Shop</h1> */}</div>
//       <div className="products">
//         {PRODUCTS.map((product) => {
//           <Product data={product} />;
//         })}
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//         {PRODUCTS.map((product) => (
//           <Product data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [productsWithDimensions, setProductsWithDimensions] = useState([]);

  useEffect(() => {
    const loadImageDimensions = async (product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = product.productImage;
        img.onload = () => {
          resolve({
            ...product,
            imageWidth: img.width,
            imageHeight: img.height,
          });
        };
      });
    };

    const loadProductsWithImageDimensions = async () => {
      const productsWithDimensions = await Promise.all(
        PRODUCTS.map(async (product) => {
          const updatedProduct = await loadImageDimensions(product);
          return updatedProduct;
        })
      );

      setProductsWithDimensions(productsWithDimensions);
    };

    loadProductsWithImageDimensions();
  }, []);

  return (
    <div className="shop">
      <div className="shopTitle">{/* <h1>Daniel's Shop</h1> */}</div>
      <div className="products">
        {productsWithDimensions.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {productsWithDimensions.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {productsWithDimensions.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {productsWithDimensions.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {productsWithDimensions.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
