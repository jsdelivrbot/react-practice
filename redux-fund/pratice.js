// function counter(state, action) {
//   if(action.type === 'INCREMENT'){
//     return state + 1;
//   } else if (action.type === 'DECREMENT') {
//     return state - 1;
//   }
// }
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});


// createStore---
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
  state = reducer(state, action);
  listeners.forEach(listener => listener());
};

  const subscribe = (listener) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
};
  dispatch({});

  return { getState, dispatch, subscribe };
};


// reducer with react dom
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      } />
    document.getElementById('root')
  );
}




// expect(
//   counter(0, { type: 'INCREMENT' })
// ).toEqual(1);
//
// expect(
//   counter(1, { type: 'INCREMENT' })
// ).toEqual(2);
//
// expect(
//   counter(2, { type: 'DECREMENT' })
// ).toEqual(1);
//
// expect(
//   counter(1, { type: 'DECREMENT' })
// ).toEqual(0);
//
// console.log('Tests passed!')
