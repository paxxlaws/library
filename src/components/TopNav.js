import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  H3,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@bootstrap-styled/v4';
import { Link, NavLink as RouterLink } from "react-router-dom";
import Button from '@bootstrap-styled/v4/lib/Button';
import { FaChevronLeft } from 'react-icons/fa';

export default function TopNav(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar sticky="top" color="faded">
    <Nav>
      <NavItem><NavLink active><Link to="/"><FaChevronLeft size="1.5em" /></Link></NavLink></NavItem>
      <NavItem><Link to="/discard"> <NavLink><H3>Scythe</H3></NavLink></Link></NavItem>
      <NavDropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
        <DropdownToggle caret nav>
          Navigation
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header><Link to="/">Home</Link></DropdownItem>
          <DropdownItem ><Link to="/">Setup</Link></DropdownItem>
          <DropdownItem ><Link to="/">Objective</Link></DropdownItem>
          <DropdownItem ><Link to="/">Gameplay</Link></DropdownItem>
          <DropdownItem divider />
          <DropdownItem ><Link to="/">Appendix</Link></DropdownItem>
          <DropdownItem ><Link to="/">Resources</Link></DropdownItem>
        </DropdownMenu>
      </NavDropdown>
      <NavDropdown>
        <DropdownToggle caret nav>
          Bookmarks
        </DropdownToggle>
        <DropdownMenu>
        </DropdownMenu>
      </NavDropdown>
      <NavItem><Link to="/discard"> <NavLink>Placeholder</NavLink></Link></NavItem>
    </Nav>
    </Navbar>
  );
}