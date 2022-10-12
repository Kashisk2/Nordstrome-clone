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

import Hispanic from "../../Images/Hispanic.png";

import ColourRing from "../../Images/ColourRing.png";
import ScrollingCurrent from "./ScrolingCurrentlyLoving";
import GiftByRece from "./GiftByRece";
import TrandinNow from "./TrandinNow";
import MiddelImage from "./MiddelImage";

const imageData = [
  "https://i.postimg.cc/Gh3hF38D/Screenshot-2022-10-09-152831.png",
  "https://i.postimg.cc/8z68WxHW/Screenshot-2022-10-09-152906.png",
  "https://i.postimg.cc/fyLpbPyV/Screenshot-2022-10-09-152952.png",
  "https://i.postimg.cc/T38N81VL/Screenshot-2022-10-09-153104.png",
];


function FirstImageDiv() {
  const ref = useRef();

  return (
    <VStack width={"95%"} m={"auto"} mt={"30px"}>
      <Flex mb={"50px"} width={"100%"} justifyContent={"space-between"}>
        <Image
          height={{ base: '10px', lg: '14px' }}
          width={{ base: '200px', md: "250px", lg:'auto'}}
          src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"
        ></Image>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Text
            fontSize={{sm:'14px',lg:'15px',xl:"21px"}}
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
    
          height={{ base: '10px',   lg: '14px' }}
          width={{ base: '200px',md:"250px" , lg: 'auto' }}
          src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536"
        ></Image>
      </Flex>

      <MakeMarry />
      <AnimatatedImage imageData={imageData} />
     
      <GiftByRece/>
      <TabsAll />
      <BonusNote />
      <TheThred />
      <Scroling />
      <TrandinNow/>
      <MiddelImage/>
      
     
      <ScrollingCurrent />
    </VStack>
  );
}

export default FirstImageDiv;
