const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INK":
      return state + 1;
    default:
      return state;
  }
};

let state = reducer(undefined, {});

state = reducer(state, {type: "INK"});
console.log(state);
state = reducer(state, {type: "INK"});
console.log(state);