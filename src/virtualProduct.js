// VirtualProduct.js
import React from "react";

const VirtualProduct = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      {/* Add more product information */}
    </div>
  );
};

export default VirtualProduct;
