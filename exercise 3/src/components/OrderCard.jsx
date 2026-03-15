import React from "react";

export default function OrderCard({ product, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$ " + price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : "" }}
          onClick={quantity === 0 ? undefined : onDecrease}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrease}>
          +
        </div>
      </div>
    </div>
  );
}
