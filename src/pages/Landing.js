import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

import { 
    H1,
    Jumbotron,
    P
  } from '@bootstrap-styled/v4';
import TopNav from "../components/TopNav.js";
import Detail from "./Detail.js";
import SectionList from '../components/SectionList.js';

const input = '# This is a header\n\nAnd this is a paragraph'

export default function Landing(props) {
  var game = props.findGame(props.match.params.name);
  var name = props.match.params;
  var match = props.match;
  console.log(props.match.params.name)
  //const [game, setGame] = useState(props.findGame(props.location.state.id));
  console.log(match.path) // /topics/:topicId/:subId
  console.log(match.url) // /topics/react-router/url-parameters

  return (
    <React.Fragment>
      <TopNav />
      <Jumbotron>
        <H1 className="display-3">{game.name}</H1>
        <P lead>{game.desc}</P>
      </Jumbotron>
      <SectionList match={match}/>
      <Route path={'/game/scythe/objective'} component={Detail} />
      <Route path={'${match.path}/:id'} component={Detail} />
    </React.Fragment>
  );
}