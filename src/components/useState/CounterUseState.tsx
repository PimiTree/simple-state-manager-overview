import React from "react";

interface CounterProps {
  title: string;
}

export const CounterUseState:React.FC<CounterProps> = ({ title }) => {
  const [count, setCount] = React.useState(0);
  
  console.log('CounterUseState');
  return (
    <div className="card">
      <h3>{ title }</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}