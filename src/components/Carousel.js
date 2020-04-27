import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg
} from "@bootstrap-styled/v4";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";

export default function Carousel(props) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>
          <Card width="100%">
            <CardBlock>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                <ReactMarkdown source={props.setup} />
              </CardText>
              <Button color="primary">Go somewhere</Button>
            </CardBlock>
            <CardImg
              top
              src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
              alt="Card image cap"
            />
          </Card>
        </Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
