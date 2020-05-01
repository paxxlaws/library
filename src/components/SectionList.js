import React, { useState } from "react";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "@bootstrap-styled/v4";
import { Link, NavLink as RouterLink, useRouteMatch } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import AccordionNav from "../components/AccordionNav.js";
import { Route } from "react-router-dom";

export default function SectionList(props) {
  let { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <ListGroup>
        <RouterLink to={`${url}/setup`}>
          <ListGroupItem>Setup</ListGroupItem>
        </RouterLink>
        <NavLink to={`${url}#objective`}>
          <ListGroupItem>Objective</ListGroupItem>
        </NavLink>
        <RouterLink to={`${url}/gameplay`}>
          <ListGroupItem>Gameplay</ListGroupItem>
        </RouterLink>
        <RouterLink to={`${url}/appendix`}>
          <ListGroupItem>Appendix</ListGroupItem>
        </RouterLink>
        <RouterLink to={`${url}/resources`}>
          <ListGroupItem>Resources</ListGroupItem>
        </RouterLink>
      </ListGroup>
    </React.Fragment>
  );
}
