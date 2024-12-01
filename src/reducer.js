import * as actions from "./actions.js";

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === actions.INCREMENT) return { count: state.count + 1 };
  if (action.type === actions.DECREMENT) return { count: state.count - 1 };
  if (action.type === actions.SET) return { count: action.payload };
  return state;
};
