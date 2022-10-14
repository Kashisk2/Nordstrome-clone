import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { Product } from "../Pages/Product";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";
import { SideNavbar } from "./SideNavbar";

export const FinalProduct = () => {
  return (
    <ChakraProvider>
<Box>
  <Header/>
<Navbar/>
    <Flex>
      <SideNavbar />
      <Product />
    </Flex>
</Box>
<Footer/>
    </ChakraProvider>
  );
};
