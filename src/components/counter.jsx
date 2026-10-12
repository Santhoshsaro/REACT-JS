import { useContext } from "react";
import { CounterContext } from "./context";
import Button from "./button";
import "./context.css";

function Counter() {
  const { state } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <div className="counter-box">

        <h1>Counter</h1>

        <div className="counter-value">
          {state.count}
        </div>

        <Button />

      </div>
    </div>
  );
}

export default Counter;