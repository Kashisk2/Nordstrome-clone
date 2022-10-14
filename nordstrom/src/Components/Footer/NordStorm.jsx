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
function NordStorm() {
  return (
    <VStack gap={'8px'} align={"start"}>
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
        Nordstrom, Inc.
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
        Nordstrom Rack
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
        Nordstrom Canada
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
        Investor Relations
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
        Press Releases
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
        Nordstrom Media Network
      </Text>
    </VStack>
  );
}

export default NordStorm;
