import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import BootstrapProvider from '@bootstrap-styled/provider';
import ActionCard from "./components/ActionCard.js";
import TopNav from "./components/TopNav.js";
import { 
  Alert,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@bootstrap-styled/v4';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

const myTheme = {
  '$btn-primary-bg': 'green',
  '$btn-primary-color': 'white',
};



function App() {
  const home = () => { return <ActionCard title="Scythe1" year={2010} desc="This is a description"/>};
  const test = 3;

  return (
    <BootstrapProvider theme={myTheme}>
      <Router>
        <React.Fragment>
          <TopNav />
          <Switch>
              <Route exact path="/">
                <ActionCard title="Scythe" year={2010} desc="This is a description"/>
                <ActionCard title="Scythe" year={2010} desc="This is a description"/>
                <ActionCard title="Scythe" year={2010} desc="This is a description"/>
              </Route>
              <Route path="/discard" component={home} />
          </Switch>
        </React.Fragment>
      </Router>
    </BootstrapProvider>
  );
}

export default App;
