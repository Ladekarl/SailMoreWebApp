import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import configureStore, { history } from "./configureStore";
import { Provider } from "react-redux";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
