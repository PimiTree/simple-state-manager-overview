import {
  type FC,
  type ReactNode,
  useState
} from "react";
import {
  CountContext
} from "../../statesDefinitions/reactContext.tsx";

interface CounterProviderProps {
 children: ReactNode; 
}

export const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext value={{ count, setCount }}>
      {children}
    </CountContext>
  )
}