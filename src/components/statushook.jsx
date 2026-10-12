import { useState } from "react";
import "./status.css";

function StatusHook() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="container">

        <h1>React useState</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light Theme" : "Dark Theme"}
        </button>

        <div className="card">
          <h2>Counter</h2>

          <h1>{count}</h1>

          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>

        <p>
          Current Theme: {darkMode ? "Dark" : "Light"}
        </p>

      </div>
    </div>
  );
}

export default StatusHook;