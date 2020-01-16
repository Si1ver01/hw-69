/* eslint-disable */
import React, { useEffect } from "react";
import MenuList from "../components/MenuList";
import {fetchDishes, fetchOrder} from "../store/actions";
import { connect } from "react-redux";
import Preloader from "../components/Preloader";
import ErrorPage from "../components/ErrorPage";
import Cart from "../components/Cart";
import {addDish, delDish} from "../store/types";

const Menu = props => {
  useEffect(() => {
    props.fetchDishes();
  }, []);

  if (props.loading) {
    return <Preloader />;
  }

  if (props.error) {
    return <ErrorPage error={props.error.message} />;
  }

  return (
    <div className="row">
      <div className="col-sm-8">
        {props.menu && <MenuList menu={props.menu} btnHandler={props.addDish}/>}
      </div>
      <div className="col-sm-4">
        <Cart cartList={props.cart} menu={props.menu} delHandler={props.delDish} sendOrder={props.sendOrder}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  menu: state.dishes.menu,
  error: state.dishes.error,
  loading: state.dishes.loading,
  cart: state.cart.orderList
});

const mapDispatchToProps = dispatch => {
  return {
    fetchDishes: () => dispatch(fetchDishes()),
    addDish : dish => dispatch(addDish(dish)),
    delDish : dish => dispatch(delDish(dish)),
    sendOrder : order => dispatch(fetchOrder(order))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
