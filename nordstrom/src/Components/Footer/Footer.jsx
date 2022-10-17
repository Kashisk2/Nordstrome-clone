import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Coustemr from "./Coustemr";
import NordStorm from "./NordStorm";
import Reward from "./Reward";
import Store from "./Store";
import { FiSmartphone, FiInstagram } from "react-icons/fi";
import { ImPinterest2, ImTwitter } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import FadeInSection from "../Fadein/Fadein";

// console.log(styles.footer)
const style = {};
const hoverStyle = {
  curser: "pointer",
};
console.log(hoverStyle);
function Footer() {
  return (
    <FadeInSection>
    <Box p={"30px"} backgroundColor={"#f9f9f9"} width="100%">
        <Flex direction={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'start' }} >
          <Grid templateColumns={{ base: "repeat(1,1fr)" , md: "repeat(3,1fr)", lg:"repeat(5,1fr)"}} gap="25px" w="72%" mb={"50px"}>
          <Coustemr />
          <About />
          <Store />
          <Reward />
          <NordStorm />
        </Grid>
        <Flex
          ml={"35px"}
          mb={'30px'}
          mr={'35px'}
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Flex mb={"30px"} alignItems={"center"}>
            <FiSmartphone fontSize={"30px"} color={"#393939"} />
            <Text
              fontSize={"16px"}
              ml={"10px"}
              color="#393939"
              lineHeight={"22.5px"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Get our apps
            </Text>
          </Flex>
          <Flex ml={"4px"} alignItems={"center"} gap={"15px"}>
            <FiInstagram fontSize={"24px"} />
            <ImPinterest2 fontSize={"24px"} />
            <ImTwitter fontSize={"24px"} />
            <RiFacebookCircleLine fontSize={"24px"} />
            <AiOutlinePlus />
          </Flex>
        </Flex>
      </Flex>
      <Stack direction={{base:"column",md:'row'}} align={'center'} gap={{base:"20px",md:"50px"}}>
        <Text
          fontSize={"13px"}
          color="#393939"
          borderBottom="2px solid transparent"
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
          Privacy
        </Text>
        <Text
          fontSize={"13px"}
          color="#393939"
          borderBottom="2px solid transparent"
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
          Do Not Sell My Personal Information
        </Text>
        <Text
          fontSize={"13px"}
          color="#393939"
          borderBottom="2px solid transparent"
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
          Terms & Conditions
        </Text>
        <Text
          fontSize={"13px"}
          color="#393939"
          borderBottom="2px solid transparent"
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
          Interest-Based Ads
        </Text>
        <Text
          fontSize={"13px"}
          color="#393939"
          borderBottom="2px solid transparent"
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
          ©2022 Nordstrom, Inc.
        </Text>
      </Stack>
    </Box>
      </FadeInSection>
  );
}

export default Footer;
