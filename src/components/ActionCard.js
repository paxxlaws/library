import React from 'react';
import styled from 'styled-components';
import { Button, Card, CardBlock, CardImg, CardTitle, CardSubtitle, CardText } from '@bootstrap-styled/v4';

export default function ActionCard(props) {
  return (
    <Card className="ActionCard">
      <CardImg top width="100%" height="400"/>
      <CardBlock>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.year}</CardSubtitle>
        <CardText>{props.desc}</CardText>
        <Button color="primary">Read Rules</Button>
      </CardBlock>
    </Card>
  );
}
