import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <h1 className="count">{count}</h1>

      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;