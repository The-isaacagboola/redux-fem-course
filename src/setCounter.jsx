import { useEffect, useState } from "react";
import { set } from "./actions";
import useActions from "./useActions";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export default function SetCounter() {
  const countFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(+countFromStore);

  // const actions = bindActionCreators({increment}, dispatch)
  //   const dispatch = useDispatch();
  // this works but we could also say;

  const action = useActions({ set });

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);
  return (
    <section className="set-count">
      <form>
        <label htmlFor="set-to">Set Count:</label>
        <input
          id="set-to"
          type="number"
          value={count || ""}
          onChange={(e) => setCount(+e.target.value)}
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
