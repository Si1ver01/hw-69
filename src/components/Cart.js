import React, { useState } from "react";
import CartItem from "./CartItem";
import Form from "./Form";

const Cart = ({ cartList, menu, delHandler, sendOrder }) => {
  const COAST_OF_DELIVERY = 150;
  const totalPrice =
    cartList.reduce((acc, name) => {
      const index = menu.findIndex(el => el.name === name);
      return acc + menu[index].price;
    }, 0) + COAST_OF_DELIVERY;

  const [order, setOrder] = useState(false);

  if (order) {
    return <Form sendOrder={sendOrder} order={cartList} closeForm={() => setOrder(false)}/>;
  }

  return (
    <div className="border border-primary rounded">
      <h4 className="text-center">Cart</h4>
      <ul className="list-unstyled container">
        {cartList.length ? (
          menu.map((dish, index) => (
            <CartItem
              index={index}
              name={dish.name}
              price={dish.price}
              dishList={cartList}
              key={dish.name}
              delHandler={delHandler}
            />
          ))
        ) : (
          <p className="text-center text-danger">Корзина пуста</p>
        )}
        <li className="d-flex justify-content-between border-top pt-2 mb-2">
          <span>Доставка :</span>
          <span>150kgs</span>
        </li>
        <li className="d-flex justify-content-between">
          <span>Итого к оплате :</span>
          <strong>{totalPrice}kgs</strong>
        </li>
      </ul>
      <div className="d-flex justify-content-center mb-2 container">
        <button
          className="btn btn-block btn-success"
          disabled={!cartList.length}
          onClick={() => setOrder(true)}
        >
          Заказать
        </button>

      </div>
    </div>
  );
};

export default Cart;
