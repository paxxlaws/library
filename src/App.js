import React from 'react';
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";

function App() {
  
  return (
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route path={`/game/:name`} component={Landing} />
    </Switch>
  );
}

export default App;
