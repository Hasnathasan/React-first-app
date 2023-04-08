import React from "react";
import Cart from "../Cart/Cart";

const Orders = () => {
  return (
    <div>
      <div className="shop-container">
        <div className="products-container"></div>
        <div className="cart-details">
          <Cart cart={[]}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
