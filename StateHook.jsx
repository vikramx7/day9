import { useEffect, useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(10);

  // useEffect(function, array);
  useEffect(() => {
    // side effects
    setCount(count + 1);
  }, [randomNumber]);

  return (
    <div style={{}}>
      <h1>Count: {count}</h1>
      <h1>{randomNumber}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setRandomNumber(randomNumber + 1)}>
        Increase Random
      </button>
    </div>
  );
}

export default StateHook;

// miq-ricb-kgh