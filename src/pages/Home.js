import React, { useState } from "react";
import styled from "styled-components";
import Game from "../components/Game.js";
import Banner from "../components/Banner.js";
import { games } from "../data/games.js";

export default function Home(props) {
  const gameList = () => {
    var list = [];

    for (var key in games) {
      list.push(
        <Game
          id={games[key].id}
          title={games[key].name}
          year={games[key].year}
          desc={games[key].desc}
          vanity={games[key].vanity}
        />
      );
    }
    return list;
  };

  return (
    <React.Fragment>
      <Banner changeTheme={props.changeTheme} />
      {gameList()}
    </React.Fragment>
  );
}
