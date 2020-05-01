import React, { useState } from "react";
import styled from "styled-components";
import {
  H3,
  Nav,
  P,
  Navbar,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "@bootstrap-styled/v4";
import { Link, NavLink as RouterLink, useRouteMatch } from "react-router-dom";
import Button from "@bootstrap-styled/v4/lib/Button";
import { FaChevronLeft, FaEllipsisH } from "react-icons/fa";
import SectionList from "./SectionList";

const StyledNavbar = styled(Navbar)`
  position: sticky !important;
  position: -webkit-sticky !important;
  top: 0 !important;
  z-index: 999;
  background-color: white;
`;

export default function TopNav(props) {
  const [isOpen, setOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  let { path, url } = useRouteMatch();

  return (
    <StyledNavbar sticky="top">
      <Nav className="d-flex justify-content-between">
        <NavItem>
          <NavLink active>
            <Link to="/">
              <FaChevronLeft size="1.5em" />
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to={url}>
            <NavLink>
              <H3>{props.title}</H3>
            </NavLink>
          </Link>
        </NavItem>
        <Nav>
          <NavDropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
            <DropdownToggle caret nav>
              Navigation
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <Link to={url}>Home</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={`${url}/setup`}>Setup</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={`${url}/rendering`}>Objective</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={`${url}/rendering`}>Gameplay</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to={`${url}/rendering`}>Appendix</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to={`${url}/rendering`}>Resources</Link>
              </DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavLink>
            <Link to={`${url}/menu`}>
              <FaEllipsisH size="1.5em" />
            </Link>
          </NavLink>
          <NavLink>
            <Button
              color="primary"
              className="mb-2"
              onClick={() => setExpanded(!isExpanded)}
            >
              Menu
            </Button>
          </NavLink>
        </Nav>
      </Nav>
      <Collapse isOpen={isExpanded}>
        <SectionList />
      </Collapse>
    </StyledNavbar>
  );
}
