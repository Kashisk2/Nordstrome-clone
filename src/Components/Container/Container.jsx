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
import MiddelText from "./middelText";
import FadeInSection from "../Fadein/Fadein";

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
      

      <MiddelText/>
     
      <MakeMarry />
      <FadeInSection>
      <AnimatatedImage imageData={imageData} />
        </FadeInSection>
      <FadeInSection>
        <GiftByRece />
      </FadeInSection>

      <FadeInSection>
      <TabsAll />
      </FadeInSection>
     
      <FadeInSection>
      
      <BonusNote />
      </FadeInSection>
      <FadeInSection>
       
      <TheThred />
      </FadeInSection>
      
        
      <Scroling />
      
      <FadeInSection>
     
      <TrandinNow/>
      </FadeInSection>
      <FadeInSection>
    
      <MiddelImage/>
      </FadeInSection>
      
     
      <ScrollingCurrent />
    
     
    </VStack>
  );
}

export default FirstImageDiv;
