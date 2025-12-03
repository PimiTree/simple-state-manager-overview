import { create } from 'zustand'; 

interface counterStore {
  count: number;
  inc: () => void;
  reset: () => void;
}


export const useCounterStore = create<counterStore>((set, _, store) => ({
  count: 0,
  inc: ()=> set((state) => ({count: state.count + 1})),
  reset: () => {
    set(store.getInitialState())
  }
}));                   