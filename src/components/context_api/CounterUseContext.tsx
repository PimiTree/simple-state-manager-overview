import React, {
  useContext
} from "react";
import {
  CountContext
} from '../../statesDefinitions/reactContext.tsx';

interface CounterProps {
  title: string;
}

export const CounterUseContext:React.FC<CounterProps> = ({ title }) => {
  const {count, setCount} = useContext(CountContext);

  console.log('CounterUseContext');
  return (
    <>
      <div className="card">
        <h3>{ title }</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}