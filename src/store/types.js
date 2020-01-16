export const REQUEST = "REQUEST";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";

export const ADD_DISH = "ADD_DISH";
export const DEL_DISH = "DEL_DISH";
export const CLEAR_DISH = "CLEAR_DISH";

export const request = () => ({ type: REQUEST });
export const requestSuccess = res => ({ type: REQUEST_SUCCESS, payload: res });
export const requestFailure = err => ({ type: REQUEST_FAILURE, payload: err });

export const addDish = name => ({ type: ADD_DISH, payload: name });
export const delDish = name => ({ type: DEL_DISH, payload: name });
export const clearDish = () => ({ type: CLEAR_DISH });
