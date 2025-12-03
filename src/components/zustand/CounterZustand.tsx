import React
  from "react";
import {
  useCounterStore
} from "../../stores/zustandStores.ts";

interface CounterZustandProps {
  title: string;
}

export const CounterZustand:React.FC<CounterZustandProps> = ({title}) => {
  const {count, inc, reset } = useCounterStore();
  
  return  <div className="card">
    <h3>{ title }</h3>
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <button onClick={inc}>
        count is {count}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  </div>
};