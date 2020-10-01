import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        className="btn btn-primary btn-large"
        onClick={dec}>
        DEC
      </button>
      <button
        className="btn btn-primary btn-large"
        onClick={inc}>
        INK
      </button>
      <button
        className="btn btn-primary btn-large"
        onClick={rnd}>
        RND
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {

  const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

  return {
    inc: () => inc(),
    dec: () => dec(),
    rnd: () => {
      const payload = Math.floor(Math.random() * 10 - 5);
      rnd(payload);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);