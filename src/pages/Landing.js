import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { findGame } from "../helpers/Games.js";
import { 
    H1,
    Jumbotron,
    P
  } from '@bootstrap-styled/v4';
import TopNav from "../components/TopNav.js";
import Detail from "./Detail.js";
import SectionList from '../components/SectionList.js';

export default function Landing(props) {
  var game = findGame(props.match.params.name);

  return (
    <React.Fragment>
      <TopNav title={game.name}/>
      <Switch>
        <Route exact path={`${props.match.path}`} component={SectionList} />
        <Route path={'/game/:name/:section'} component={Detail} />
      </Switch>
      <TopNav title={game.name}/>
    </React.Fragment>
  );
}