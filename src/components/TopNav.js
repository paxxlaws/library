import React, { useState } from 'react';
import styled from 'styled-components';
import { 
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
import { FaBeer } from 'react-icons/fa';

export default function TopNav(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar sticky="top" color="faded">
    <Nav>
      <NavItem>
        <NavLink active href="/"><FaBeer />Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/discard" cssModule="Active">Active</NavLink>
      </NavItem>
      <NavDropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
        <DropdownToggle caret nav>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </NavDropdown>
      <NavItem>
        <NavLink>Link</NavLink>
      </NavItem>
      <NavItem>
        <RouterLink to="/discard">Link</RouterLink>
      </NavItem>
      <NavItem>
        <NavLink><Link to="/discard">Link</Link></NavLink>
      </NavItem>
      <NavItem>
        <Link to="/discard"><NavLink>Link</NavLink></Link>
      </NavItem>
    </Nav>
    </Navbar>
  );
}