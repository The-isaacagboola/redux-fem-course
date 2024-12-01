import { useState } from "react";

import "./App.css";
import Counter from "./counter";

interface counterState {
  count: number;
}
interface UserState {
  isSignedIn: boolean;
}

// actions
const increment = { type: "INCREMENT", payload: 1 };
const decrement = { type: "DECREMENT", payload: 2 };
const incrementByAmount = (amount) => ({ type: "SET_AMOUNT", payload: amount });

function App() {
  return <Counter />;
}

export default App;
