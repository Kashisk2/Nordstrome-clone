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

function Store() {
  return (
    <VStack gap={'8px'} align={{ base: "center", md: "start" }}>
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
        Stores & Services
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
        Find a Store
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
        Free Style Help
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
        Alterations & Tailoring
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
        Pop-In Shop
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
        Virtual Events
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
        Spa Nordstrom
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
        Nordstrom Restaurants
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
        Nordstrom Local
      </Text>
    </VStack>
  );
}

export default Store;
