import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INK":
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type:"INK"});
store.dispatch({type:"INK"});