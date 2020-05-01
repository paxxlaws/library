import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

const lightTheme = {
  "$btn-primary-bg": "#333333",
  "$btn-primary-color": "white",
  "$color-white": "#FFF"
};

const darkTheme = {
  "$headings-color": "white",
  "$body-color": "white",
  "$btn-primary-bg": "#dddddd",
  "$btn-primary-color": "black",
  "$jumbotron-bg": "black",
  test: "red"
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App lightTheme={lightTheme} darkTheme={darkTheme} />
    </Router>
  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
