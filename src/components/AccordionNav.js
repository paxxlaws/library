import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import {
  Button,
  A,
  Accordion,
  AccordionGroup,
  CardBlock,
  H1,
  Jumbotron,
  Navbar,
  P,
  Strong
} from "@bootstrap-styled/v4";
import { Link, useRouteMatch } from "react-router-dom";
import TopNav from "../components/TopNav.js";
import Carousel from "../components/Carousel.js";

export default function AccordionNav(props) {
  let { path, url } = useRouteMatch();
  const [activeAccordionName, setActive] = useState(props.view);

  const setup =
    "\n\n1. Shuffle the Point cards (orange back) to form a deck, then draw 5 cards and place them face up in a row to the left of that deck. \n\n2. Place a pile of gold tokens equal to the number of players x2 above the first (leftmost) point card. Then place a pile of silver tokens equal to the number of players x2 above the second Point card ";

  function checkActive(selected) {
    if (selected == activeAccordionName) {
      setActive("none");
    } else {
      setActive(selected);
    }
  }

  return (
    <React.Fragment>
      <AccordionGroup
        activeAccordionName={activeAccordionName}
        onChange={activeAccordionName => checkActive(activeAccordionName)}
      >
        <Accordion
          heading={<Link to={`${url}/setup`}>Setup</Link>}
          name={"Accordion1"}
        >
          <CardBlock>
            <ReactMarkdown source={setup} />
          </CardBlock>
          <Carousel setup={setup} />
        </Accordion>
        <Accordion
          heading={<Link to={`${url}/objective`}>Objective</Link>}
          name="Accordion2"
        >
          <CardBlock>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBlock>
        </Accordion>
        <Accordion heading={<Strong>Gameplay</Strong>} name="Accordion3">
          <CardBlock>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBlock>
        </Accordion>
        <Accordion heading={<Strong>Appendix</Strong>} name="Accordion4">
          <CardBlock>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBlock>
        </Accordion>
        <Accordion heading={<Strong>Resources</Strong>} name="Accordion5">
          <CardBlock>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBlock>
        </Accordion>
      </AccordionGroup>
    </React.Fragment>
  );
}
