import React from "react";
import ReactDom from "react-dom";

import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";

import Counter from "./counter";

import * as actions from "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDom.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const payload = Math.floor(Math.random() * 10 - 5);
        rnd(payload);
      }}/>,
    document.getElementById("root")
  );
};

update();
store.subscribe(update);