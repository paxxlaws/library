import React, { useState } from 'react';
import { Jumbotron, H1, P } from '@bootstrap-styled/v4';
import Game from "../components/Game.js";
import { games } from "../helpers/Games.js";

export default function Home() {

  const gameList = () => {
    var list = [];
    
    for (var key in games) {
      list.push(<Game id={games[key].id} title={games[key].name} year={games[key].year} desc={games[key].desc} url={games[key].url}/>
      );
    }
    return list;
  }

  return (
    <React.Fragment>
      <Jumbotron>
        <H1 className="display-3">Welcome!</H1>
        <P lead>This is a description</P>
      </Jumbotron>
      {gameList()}
    </React.Fragment>
  );
}