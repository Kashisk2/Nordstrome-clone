import React from "react";
import Styled from "./styles.ts";
import NewArivelDataArray from "./NewArivelDataArray";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
function Scroling() {
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
  console.log(NewArivelDataArray);
  return (
    <Styled.Container>
      <Heading fontSize={"25px"} color={"#393939"}>
        New arrivals from brands you might like
      </Heading>
      <Flex>
        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 2, 610, -10);
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
          {NewArivelDataArray.map(({ searchImage, brand, price }, i) => (
            <Box>
              <Styled.Content url={searchImage} key={`img-${i}`} />
              <Text ml={"5px"} fontSize={"13px"} color={"#393939"}>
                {brand}
              </Text>
              <Text
                fontWeight={"700"}
                ml={"5px"}
                lineHeight={"18px"}
                color={"#393939"}
                fontSize={"13px"}
              >
                INR {price}
              </Text>
            </Box>
          ))}
        </Styled.ContentWrapper>

        <Styled.Button
          onClick={() => {
            sideScroll(contentWrapper.current, 2, 609.5, 10);
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
      <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
    </Styled.Container>
  );
}

export default Scroling;
