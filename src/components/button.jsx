import { useContext } from "react";
import { CounterContext } from "./context";

function Button() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div className="buttons">

      <button
        className="increment"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        className="decrement"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        className="reset"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

    </div>
  );
}

export default Button;