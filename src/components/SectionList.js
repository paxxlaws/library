import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  ListGroup,
  ListGroupItem
 } from '@bootstrap-styled/v4';
import { Link, NavLink as RouterLink } from "react-router-dom";
import Detail from "../pages/Detail.js";
import { Route } from "react-router-dom";

export default function SectionList(props) {
  //const { match } = props.match // coming from React Router.

  var match = props.match;

  return (
  <div><ListGroup>
    <RouterLink to="/game/scythe/setup"><ListGroupItem>Setup</ListGroupItem></RouterLink>
    <RouterLink to={`${props.match.url}/objective`}><ListGroupItem>Objective</ListGroupItem></RouterLink>
    <RouterLink to="/setup"><ListGroupItem>Gameplay</ListGroupItem></RouterLink>
    <RouterLink to="{`/game/${props.name}/Appendix`}"><ListGroupItem>Appendix</ListGroupItem></RouterLink>
    <RouterLink to={`/game/resources`}><ListGroupItem>Resources</ListGroupItem></RouterLink>
  </ListGroup>
  </div>
  );
}