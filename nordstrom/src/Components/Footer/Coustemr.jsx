import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
function Coustemr() {
  return (
    <VStack gap={'8px'} align={{ base: "center", md:"start"}} >
      <Text
        color="#393939"
        fontWeight={"700"}
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Customer Service
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Contact Us
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Order Status
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Shipping
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Return Policy & Exchanges
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Price Adjustments
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Gift Cards
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        FAQ
      </Text>
      <Text
        color="#393939"
        borderBottom="2px solid transparent"
        _hover={{
          cursor: "pointer",
          borderBottom: "2px solid black",
          transition: " border-color 300ms",
          touchAction: "manipulation",
        }}
      >
        Product Recalls
      </Text>
      <Flex gap={"5px"} alignItems={"center"}>
        <Image
          borderRadius={"50%"}
          height={"16px"}
          w={"16px"}
          src="https://n.nordstrommedia.com/alias/IN.gif"
        />
        <Box>
          <Text color={"#393939"} lineHeight={"22.5px"} m={"0"}>
            India
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}

export default Coustemr;
