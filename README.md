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


## [MobX](https://mobx.js.org/README.html)
### Instal
```angular2html
pnpm install mobx
```