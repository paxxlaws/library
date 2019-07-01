import React from 'react';
import styled from 'styled-components';
import { Button, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText } from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";

export default function Game(props) {

  return (
    <Card className="ActionCard">
      <CardImg top width="100%" height="0"/>
      <CardBlock>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.year}</CardSubtitle>
        <CardText>{props.desc}</CardText>
        <Link to={'/game/' + props.url}><Button color="primary">Read Rules</Button></Link>
      </CardBlock>
    </Card>
  );
}
