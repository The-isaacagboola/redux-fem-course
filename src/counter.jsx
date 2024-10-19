import { useSelector } from "react-redux";

import SetCounter from "./setCounter";
import { useCounter } from "./use-counter";

export const Counter = () => {
  const incident = "Incident";
  // const count = useSelector((state) => state.count);
  // const dispatch = useDispatch();

  //This way
  // const actions = bindActionCreators({ increment, set, decrement }, dispatch);

  // or we use the useAction hook
  // const actions = useActions({ increment, decrement, set });

  //lastly
  const { increment, decrement, set, count } = useCounter();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => set(0)}>Reset</button>
        <button onClick={() => decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
