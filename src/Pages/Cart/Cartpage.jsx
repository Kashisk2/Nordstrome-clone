import { Box, Center, ChakraProvider, Divider, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { CartBag } from "./CartBag";
import { Routes, Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CartLater } from "./CartLater";
import { useContext, useRef, useState } from "react";
import { StateContext } from "../../Contex/StateContext";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export const Cartpage = () => {
  const { bagLength, laterBagLen } = useContext(StateContext);
  const ref = useRef("flex");
  const ref2 = useRef("none");
  const[bagstate,setBagState]=useState(true)
  const handlBag = () => {
 
    setBagState(true)
  };
  const handleLater = () => {
    
    setBagState(false)
  };

  return (
    <ChakraProvider>
       
        <ScrollToTop
          smooth={"true"}
          viewBox={"0 0 30 30"}
          component={
            <Box>
              <Center>
                <RiArrowUpSLine size={"20px"} width={"400"} />
              </Center>
              <Text color={"#393939"} fontSize={"13px"}>
                Top
              </Text>
            </Box>
          }
        />
        <Navbar />
         
      <Box p="0% 5%">
        <Tabs>
          <TabList border="none">
            
            <Tab onClick={handlBag} border="1px solid black">Shoping Bag ({bagLength})</Tab>
           

      
              {" "}
            <Tab onClick={handleLater} border="1px solid black">Save for later ({laterBagLen})</Tab>
           
          </TabList>
        </Tabs>
        {
          bagstate ? <CartBag /> : <CartLater />
        }
         
        
      </Box>
      <Footer/>
    </ChakraProvider>
  );
};
