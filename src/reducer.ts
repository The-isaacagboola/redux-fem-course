import { INCREMENT, SET } from "./actions";
import { DECREMENT } from "./actions";

export const initialState = { count: 0 };

export const reducer = (
  state: { count: number } = initialState,
  action?: { type: string; payload?: number }
) => {
  if (action && action.type === INCREMENT) return { count: state.count + 1 };
  if (action && action.type === DECREMENT) return { count: state.count - 1 };
  if (action && action.type === SET && action.payload)
    return { count: action.payload };
  return state;
};
