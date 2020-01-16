import { ADD_DISH, CLEAR_DISH, DEL_DISH } from "./types";

const initialState = {
  orderList: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DISH:
      return { ...state, orderList: [...state.orderList, action.payload] };
    case DEL_DISH:
      return {
        ...state,
        orderList: state.orderList.filter(dish => dish !== action.payload)
      };
    case CLEAR_DISH:
      return { ...state, orderList: [] };
    default:
      return state;
  }
}
