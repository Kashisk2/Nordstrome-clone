import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatatedImage from "./AnimatatedImage";
import BonusNote from "./BonusNote";
import MakeMarry from "./make-marry";
import Scroling from "./Scroling";
import TabsAll from "./Tabs";
import TheThred from "./TheThred";
import Tranding1 from "../../Images/Tranding1.png";
import Tranding2 from "../../Images/Tranding2.png";
import Tranding3 from "../../Images/Tranding3.png";
import Hispanic from "../../Images/Hispanic.png";
import Service from "../../Images/Service.png";
import NordyPord from "../../Images/NordyPord.png";
import ShopByType from "../../Images/ShopByType.png";
import ColourRing from "../../Images/ColourRing.png";
import ScrollingCurrent from "./ScrolingCurrentlyLoving";

const imageData = [
  "https://i.postimg.cc/Gh3hF38D/Screenshot-2022-10-09-152831.png",
  "https://i.postimg.cc/8z68WxHW/Screenshot-2022-10-09-152906.png",
  "https://i.postimg.cc/fyLpbPyV/Screenshot-2022-10-09-152952.png",
  "https://i.postimg.cc/T38N81VL/Screenshot-2022-10-09-153104.png",
];
const imageDataTranding = [Tranding1, Tranding2, Tranding3];

function FirstImageDiv() {
  const ref = useRef();

  return (
    <VStack width={"95%"} m={"auto"} mt={"30px"}>
      <Flex mb={"50px"} width={"100%"} justifyContent={"space-between"}>
        <Image
          height={"14px"}
          width={"auto"}
          src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"
        ></Image>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Text
            fontSize={"21px"}
            color={"#383938"}
            lineHeight={"1.14"}
            fontWeight={"700"}
          >
            Shop what you love—faster and easier.
          </Text>
          <Text mt={"8px"} fontSize={"15px"} textDecoration={"underline"}>
            <Link>Sign In or Create an Account</Link>
          </Text>
        </Box>
        <Image
          height={"14px"}
          src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536"
        ></Image>
      </Flex>

      <MakeMarry />
      <AnimatatedImage imageData={imageData} />
      <Box width={"100%"}>
        <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
      </Box>
      <Box width={"100%"}>
        <VStack width={"100%"}>
          <Center>
            <Text fontWeight={"700"} fontSize="21px" letterSpacing={"4.2px"}>
              GIFTS BY RECIPIENT
            </Text>
          </Center>

          <Box
            _hover={{ cursor: "pointer" }}
            position={"relative"}
            width={"100%"}
            height={"365px"}
            backgroundSize="100%"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            bgImage="url('https://n.nordstrommedia.com/id/0c7312a9-d6ec-4235-bdf4-15b01fc042be.jpeg?h=395&w=1608')"
          >
            <Box
              position={"absolute"}
              bottom={"0"}
              right={"0"}
              left="0"
              width={"100"}
            >
              <Flex justifyContent={"space-around"} width={"100%"} gap={"50"}>
                <Text
                  justifyContent={"center"}
                  fontSize={"21px"}
                  fontWeight={"700"}
                >
                  For Her
                </Text>
                <Text
                  justifyContent={"center"}
                  fontSize={"21px"}
                  fontWeight={"700"}
                >
                  For Him
                </Text>
                <Text
                  justifyContent={"center"}
                  fontSize={"21px"}
                  fontWeight={"700"}
                >
                  For Kids
                </Text>
                <Text
                  justifyContent={"center"}
                  fontSize={"21px"}
                  fontWeight={"700"}
                >
                  For Teens
                </Text>
                <Text
                  justifyContent={"center"}
                  fontSize={"21px"}
                  fontWeight={"700"}
                >
                  All Gifts
                </Text>
              </Flex>
            </Box>
          </Box>
          <Flex justifyContent={"flex-start"} width="100%">
            <TabsAll />
          </Flex>
        </VStack>
      </Box>
      <BonusNote />
      <TheThred />
      <Scroling />
      <Heading
        fontSize={"21px"}
        fontWeight={"700"}
        letterSpacing="4.2px"
        lineHeight={"23.94px"}
      >
        TRENDING NOW
      </Heading>

      <AnimatatedImage imageData={imageDataTranding} />
      <Image _hover={{ cursor: "pointer" }} src={Hispanic} />
      <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
      <Heading
        fontSize={"21px"}
        fontWeight={"700"}
        letterSpacing="4.2px"
        lineHeight={"23.94px"}
      >
        SERVICES & EVENTS
      </Heading>
      <Image _hover={{ cursor: "pointer" }} src={Service} />
      <Image _hover={{ cursor: "pointer" }} src={NordyPord} />
      <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
      <Heading
        fontSize={"21px"}
        fontWeight={"700"}
        letterSpacing="4.2px"
        lineHeight={"23.94px"}
      >
        SHOP BY CATEGORY
      </Heading>
      <Image _hover={{ cursor: "pointer" }} src={ShopByType} />
      <Text
        fontSize={"21px"}
        fontWeight={"700"}
        letterSpacing="4.2px"
        lineHeight={"23.94px"}
      >
        CURRENTLY LOVING
      </Text>
      <Text fontSize={"15px"} lineHeight={"21px"}>
        Explore favorite looks from Instagram. Tag @Nordstrom to show us your
        finds.
      </Text>
      <ScrollingCurrent />
    </VStack>
  );
}

export default FirstImageDiv;
