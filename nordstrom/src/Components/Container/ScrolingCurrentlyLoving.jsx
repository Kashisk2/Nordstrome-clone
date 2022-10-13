import React from "react";
import Styled from "./ScrolingCurrentlyLoving.ts";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import CurrntlyLoving from "./CurrnetlyLoving";
function ScrollingCurrent() {
  const contentWrapper = React.useRef(null);
  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return (
    <Styled.Container>
      <Text
        fontSize={"21px"}
        fontWeight={"700"}
        letterSpacing="4.2px"
        lineHeight={"23.94px"}
        textAlign={'center'}
        mt='20px'
      >
        CURRENTLY LOVING
      </Text>
      <Text mb={'20px'} textAlign={'center'} fontSize={"15px"} lineHeight={"21px"}>
        Explore favorite looks from Instagram. Tag @Nordstrom to show us your
        finds.
      </Text>
      <Flex>
        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 4, 1440, -10);
          }}
        >
          <ChevronLeftIcon
            _hover={{ backgroundColor: "gray", color: "white" }}
            fontSize={"30px"}
            fontWeight={"400"}
            height="60px"
            color={"gray"}
          />
        </Styled.Button>
        <Styled.ContentWrapper ref={contentWrapper}>
          {CurrntlyLoving.map((el, i) => (
            <Box position={"relative"}>
              <Styled.Content url={el} key={`img-${i}`} />
            </Box>
          ))}
        </Styled.ContentWrapper>

        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 4, 1440, 10);
          }}
        >
          <ChevronRightIcon
            _hover={{ backgroundColor: "gray", color: "white" }}
            fontSize={"30px"}
            fontWeight={"400"}
            height="60px"
            color={"gray"}
          />
        </Styled.Button>
      </Flex>
    </Styled.Container>
  );
}

export default ScrollingCurrent;
