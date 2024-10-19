import { useState } from "react";
import { set } from "./actions";
import useActions from "./useActions";

export default function SetCounter() {
  const [count, setCount] = useState(0);

  //   const dispatch = useDispatch();
  // this works but we could also say;

  const action = useActions({ set });

  return (
    <section className="set-count">
      <form>
        <label htmlFor="set-to">Set Count:</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            action.set(count);
          }}
        />
      </form>
    </section>
  );
}
