import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const {
    id,
    productName,
    price,
    productImage,
    productDescription,
    originalPrice,
    imageWidth,
    imageHeight,
  } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    // <div>product</div>
    <div className="product">
      <div className="img">
        <img
          src={productImage}
          alt={"Image of " + productName}
          className={imageWidth > imageHeight ? "max-height" : "max-width"}
        />
      </div>
      <div className="description">
        <h4>{productName}</h4>
        <p>{productDescription}</p>
        <p className="price">Rp {price}</p>
        <p className="ori-price">Rp {originalPrice}</p>
      </div>
      {/* <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button> */}
    </div>
  );
};
