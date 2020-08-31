import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import cricketReducer from "./store/cricket.reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
//custom middleware start
let myMiddleware = () => {
  console.log("Inside custom middleware");
  return  next => action => {
    return next(action);
  };
};
//custom middleware end

let store = createStore(cricketReducer, applyMiddleware(myMiddleware,thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
