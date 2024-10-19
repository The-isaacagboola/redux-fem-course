export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const increment = (num) => ({
  type: INCREMENT,
  payload: num,
});

export const decrement = () => ({ type: DECREMENT });

export const set = (value) => ({
  type: SET,
  payload: value,
});
