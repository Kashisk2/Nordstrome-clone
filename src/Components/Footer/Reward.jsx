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
function Reward() {
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
        Nordstrom Card & Rewards
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
        The Nordy Club Rewards
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
        Pay My Bill
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
        Manage My Nordstrom Card
      </Text>
    </VStack>
  );
}

export default Reward;
