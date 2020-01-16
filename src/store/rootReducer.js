import { combineReducers } from "redux";
import dishesReducer from "./dishesReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
  dishes: dishesReducer,
  cart : cartReducer
});
