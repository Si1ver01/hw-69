import { REQUEST, REQUEST_FAILURE, REQUEST_SUCCESS } from "./types";

const initialState = {
  menu: null,
  loading: false,
  error: null
};

export default function dishesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };
    case REQUEST_SUCCESS:
      return { ...state, menu: action.payload, loading: false };
    case REQUEST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
