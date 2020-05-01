import React, { useState } from "react";
import styled from "styled-components";
import { Jumbotron, H1, P, Button } from "@bootstrap-styled/v4";

const StyledJumbotron = styled(Jumbotron)`
  color: ${props => props.theme.main};
  border-radius: 0px !important;
  margin-bottom: 0rem !important;
`;

export default function Banner(props) {
  return (
    <StyledJumbotron>
      <H1 className="display-3">Welcome!</H1>
      <P lead>This is a description</P>
      <Button color="primary" onClick={props.changeTheme}>
        Change Theme
      </Button>
    </StyledJumbotron>
  );
}
