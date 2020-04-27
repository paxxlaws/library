import React from "react";
import ReactDOM from "react-dom";
import BootstrapProvider from "@bootstrap-styled/provider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

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
  <BootstrapProvider theme={lightTheme}>
    <Router>
      <App />
    </Router>
  </BootstrapProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
