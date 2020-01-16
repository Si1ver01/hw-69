import React from "react";

const CartItem = ({ index, name, price, dishList, delHandler }) => {
  const quantity = dishList.filter(dish => dish === name).length;

  if (!quantity) {
    return false;
  }

  return (
    <li className="d-flex align-items-center mb-2">
      <span className="mr-1">{index + 1}.</span>
      <span className="mr-2 text-capitalize">{name}</span>
      <span>x {quantity}</span>
      <span className="ml-auto">Цена : {price * quantity}</span>

      <button
        className="btn btn-danger ml-auto"
        onClick={() => delHandler(name)}
      >
        X
      </button>
    </li>
  );
};

export default CartItem;
