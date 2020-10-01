import {createStore} from "redux";
import reducer from "./reducer";
import {dec, ink, rnd} from "./actions";

const store = createStore(reducer);

document
  .getElementById("inc")
  .addEventListener("click", () => {
    store.dispatch(ink());
  });

document
  .getElementById("dec")
  .addEventListener("click", () => {
    store.dispatch(dec());
  });

document
  .getElementById("rnd")
  .addEventListener("click", () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(rnd(payload));
  });

const update = () => {
  document
    .getElementById("counter")
    .innerText = store.getState();
};

store.subscribe(update);