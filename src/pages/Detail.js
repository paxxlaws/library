import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { findGame } from "../data/games.js";
import { H1, Jumbotron, P } from "@bootstrap-styled/v4";
import TopNav from "../components/TopNav.js";
import AccordionNav from "../components/AccordionNav.js";

export default function Detail(props) {
  var game = findGame(props.match.params.vanity);
  let { path, url } = useRouteMatch();
  //<Route exact path={`${props.match.path}`} render={() => <AccordionNav game = {game.name} url={game.url}/>} />
  //<Route path={"/game/:name/:section"} component={AccordionNav} />

  return (
    <React.Fragment>
      <TopNav title={game.name} />
      <Switch>
        <Route
          path={"/game/:vanity/objective"}
          render={() => <AccordionNav view={"Accordion2"} />}
        />
        <Route path={"/game/:vanity"} component={AccordionNav} />
      </Switch>
    </React.Fragment>
  );
}
