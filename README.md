# Simple test of state managers and React Context API

## [Context API](https://react.dev/learn/passing-data-deeply-with-context)
Native to react. Install no need.

Context API is really powerful instrument to avoid props drilling.
With react component as context provider the data from Context available at any child component.
Really good, that Context data update cause re-render just components wich consume Context data with `useContext(Context)` but not touch 
the other components.

Benefits:
1. Easy to use
2. Avoid props drilling
3. Granular rerender

Disadvantages:
1. Context data not available out of Context provider
2. It seems like, Context provider at huge children tree can be reason of performance issue.
3. Additional boilerplate with <Provider/> "component" 

## [Redux Core](https://redux.js.org/)

### Instal
```angular2html
npm install redux
```

## [Zustand](https://zustand-demo.pmnd.rs/)
### Instal
```angular2html
pnpm install zustand
```
Tiny and poor global store. Basically nothing to tell a lot. 

What can do?
1. Contain and provide data
2. Global rerender for all consumers of store (get, set)
3. Simple typing for store 
4. With some hacks, store can be transformed into selectors approach

Disadvantages
1. Has not a lot of capabilities
                                
Other
1. Use `useSyncExternalStore` under the hood to call React rerender.  

## [MobX](https://mobx.js.org/README.html)
### Instal
```angular2html
pnpm install mobx
```

## [Jotai]

## [Effector]

## useExternalSyncStore