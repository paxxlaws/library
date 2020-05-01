import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import BootstrapProvider from "@bootstrap-styled/provider";
import Detail from "./pages/Detail.js";
import Home from "./pages/Home.js";

export default function App(props) {
  const [theme, setTheme] = useState(false);
  //const [theme, setTheme] = useState(lightTheme);

  function changeTheme() {
    if (theme === false) setTheme(true);
    else setTheme(false);
    //if (theme === lightTheme) setTheme(darkTheme);
    //else setTheme(lightTheme);
    //console.log(theme);
  }
  //<BootstrapProvider theme={theme}>

  return (
    <div className="App">
      <BootstrapProvider theme={theme ? props.darkTheme : props.lightTheme}>
        <Switch>
          <Route
            exact
            path={`/`}
            render={() => <Home changeTheme={changeTheme} />}
          />
          <Route path={`/game/:vanity`} component={Detail} />
        </Switch>
      </BootstrapProvider>
    </div>
  );
}
