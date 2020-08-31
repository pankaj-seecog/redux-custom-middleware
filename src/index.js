import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import cricketReducer from "./store/cricket.reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//custom middleware start
let myMiddleware = () => {
  console.log("Inside middleware");
  return  next => action => {
    console.log("Inside middleware");
    console.log("Action type is ", action.type);
    return next(action);
  };
};
//custom middleware end

let store = createStore(cricketReducer, applyMiddleware(myMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
