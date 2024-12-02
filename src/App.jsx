import { useState } from "react";

import "./App.css";
import Counter from "./counter";

/*
interface counterState {
  count: number;
}

interface UserState {
  isSignedIn: boolean;
}
*/

// Actions
const increment = { type: "INCREMENT" };
const decrement = { type: "DECREMENT" };
const incrementByAmount = (amount) => ({ type: "SET_AMOUNT", payload: amount });

// Reducers

function App() {
  return <Counter />;
}

export default App;
