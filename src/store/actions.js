import { clearDish, request, requestFailure, requestSuccess } from "./types";

export const fetchDishes = () => {
  return async dispatch => {
    try {
      dispatch(request());
      const response = await fetch(
        "https://ddanshin-af25f.firebaseio.com/menu.json"
      );
      const data = await response.json();
      const formatData = Object.keys(data).map(dish => ({
        ...data[dish],
        name: dish
      }));
      dispatch(requestSuccess(formatData));
    } catch (e) {
      dispatch(requestFailure(e));
    }
  };
};

export const fetchOrder = order => {
  return async dispatch => {
    try {
      await fetch(
        "https://ddanshin-af25f.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(order)
        }
      );
      dispatch(clearDish());
    } catch (e) {
      dispatch(requestFailure(e));
    }
  };
};
