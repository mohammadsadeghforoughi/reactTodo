import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
     <h3 style={{color: '#a5d888'}}>
          {props.counterName}
      </h3>
      <span>{count}</span>
      <button onClick={handleCount}>add with functional component</button>
    </>
  );
}

export default Counter;
