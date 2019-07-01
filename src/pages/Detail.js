import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
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
} from '@bootstrap-styled/v4';
import TopNav from "../components/TopNav.js";

export default function Detail(props) {
  const [activeAccordionName, setActive] = useState("Accordion1");

  function checkActive (selected) {
    if(selected==activeAccordionName){
      setActive("none");
    }
    else {
      setActive(selected);
    }
  }

  return (
    <React.Fragment>
    <TopNav />
    <AccordionGroup activeAccordionName={activeAccordionName} onChange={(activeAccordionName) => checkActive(activeAccordionName)}>
      <Accordion heading="Setup" name="Accordion1">
      <CardBlock>
        <H1>Test</H1>
      <P><ReactMarkdown plugins={[breaks]}>
         # test
         * Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.  
         * Test
      </ReactMarkdown></P>
      </CardBlock>
      </Accordion>
      <Accordion heading={<A>Objective</A>} name="Accordion2">
      <CardBlock>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBlock>
      </Accordion>
      <Accordion heading={<Strong>Gameplay</Strong>} name="Accordion3">
      <CardBlock>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBlock>
      </Accordion>
      <Accordion heading={<Strong>Appendix</Strong>} name="Accordion4">
      <CardBlock>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBlock>
      </Accordion>
      <Accordion heading={<Strong>Resources</Strong>} name="Accordion5">
      <CardBlock>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </CardBlock>
      </Accordion>
    </AccordionGroup>
    </React.Fragment>
  );
}