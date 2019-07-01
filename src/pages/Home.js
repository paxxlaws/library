import React, { useState } from 'react';
import styled from 'styled-components';
import { Jumbotron, H1, P } from '@bootstrap-styled/v4';
import Game from "../components/Game.js";

export default function Home(props) {

  const gameList = () => {
    var list = [];
    var games = props.games;
    
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