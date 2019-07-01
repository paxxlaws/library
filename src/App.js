import React from 'react';
import './App.css';
import styled from 'styled-components';
import BootstrapProvider from '@bootstrap-styled/provider';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { 
  Alert
} from '@bootstrap-styled/v4';
import Landing from "./pages/Landing.js";
import Detail from "./pages/Detail.js";
import Home from "./pages/Home.js";

const games = [
  {
    "id": 1000,
    "url": "scythe",
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
    "url": "star_wars_outer_rim",
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

function findGame (input) {
  var DesiredGame;
  if(isNaN(input)){DesiredGame = games.find(game => game.url === input);}
  else {DesiredGame = games.find(game => game.id === input);}
  console.log(DesiredGame);
  return DesiredGame;
} 

function getURL (title) {
  var url = title;
  url = url.replace(/\s+/g, '_').toLowerCase();
  return url;
}

const myTheme = {
  '$btn-primary-bg': 'green',
  '$btn-primary-color': 'white',
};

function App() {
  
  return (
    <BootstrapProvider theme={myTheme}>
      <Router>
        <Switch>
          <Route exact path={`/`} render={ (props) => <Home {...props} games={games}/>} />
          <Route exact path={`/game/:name`} render={ (props) => <Landing {...props} findGame={findGame}/>} />
        </Switch>
      </Router>
    </BootstrapProvider>
  );
}

export default App;
