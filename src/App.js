import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import BootstrapProvider from '@bootstrap-styled/provider';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { 
  Alert,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  H1,
  P
} from '@bootstrap-styled/v4';
import Game from "./components/Game.js";
import Detail from "./pages/Detail.js";

const games = [
  {
    "id": 1000,
    "name": "Scythe",
    "year": 2010,
    "desc": "This is a description",
    "category": [
      "Cat1",
      "Cat2",
      "Cat3"
    ]
  },
  {
    "id": 1001,
    "name": "Star Wars Outer Rim",
    "year": 2019,
    "desc": "This is a description",
    "category": [
      "Cat1",
      "Cat2",
      "Cat3"
    ]
  }
];

const gameList = () => {
  var list = [];
  for (var key in games) {
    list.push(<Game title={games[key].name} year={games[key].year} desc={games[key].desc}/>
    );
  }
  return list;
}

function App() {
  const home = () => { return <Game title="Scythe1" year={2010} desc="This is a description"/>};
  const test = 3;
  const myTheme = {
    '$btn-primary-bg': 'green',
    '$btn-primary-color': 'white',
  };

  return (
    <BootstrapProvider theme={myTheme}>
      <Router>
        <React.Fragment>
          <Jumbotron>
            <H1 className="display-3">Hello, world!</H1>
            <P lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</P>
          </Jumbotron>
          <Switch>
              <Route exact path="/" component={gameList}>
              </Route>
              <Route path="/discard" component={home} />
              <Route path="/games/scythe">
              </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </BootstrapProvider>
  );
}

export default App;
