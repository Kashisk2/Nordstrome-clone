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

function About() {
  return (
    <VStack align={"start"}>
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
        About Us
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
        Careers
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
        Corporate Social Responsibility
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
        Diversity, Inclusion & Belonging
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
        Get Email Updates
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
        Nordstrom Blog
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
        The Thread
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
        Nordy Podcast
      </Text>
    </VStack>
  );
}

export default About;
