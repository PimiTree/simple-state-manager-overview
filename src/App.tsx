import './App.css'
import {
  CounterUseState
} from "./components/useState/CounterUseState.tsx";
import {
  CounterUseContext,
} from "./components/context_api/CounterUseContext.tsx";
import {
  CounterProvider
} from "./components/context_api/CounterProvider.tsx";
import {
  CounterZustand
} from "./components/zustand/CounterZustand.tsx";

function App() {
  return (
    <>
      <CounterUseState title="Counter with useState" />
      <CounterProvider>
        <CounterUseContext title="CounterUseContext" />
        <CounterUseState title="Counter with useState inside the Context (not rerender if counter above updates)" />
        <CounterUseContext title="CounterUseContext" />
        <CounterZustand title="Zustand inside useContext" />
      </CounterProvider>
      <CounterZustand title="Zustand" />
    </>
  )
}

export default App
