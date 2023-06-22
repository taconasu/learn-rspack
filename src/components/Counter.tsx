import { useState } from "react";
import { CounterContext } from "../contexts/counter";
import React from "react";
import { Count } from "./Count";

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CounterContext.Provider value={counter}>
        <Count />
        <button onClick={() => setCounter(counter + 1)}>increment</button>
      </CounterContext.Provider>
    </div>
  );
};
