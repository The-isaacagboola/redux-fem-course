import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { INCREMENT } from "./actions.js";

const unsubscribe = store.subscribe(() =>
  console.log("Store was updated. Current value is now", store.getState().count)
); // return a fn to unsubscribe from the store

store.dispatch({ type: "SET", payload: 80 });
console.log(store.getState());
unsubscribe(); // No more subscription messages would be gotten going on forward
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
