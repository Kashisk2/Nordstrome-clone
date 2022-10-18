import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { Product } from "../Pages/Product";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";
import { SideNavbar } from "./SideNavbar";
import { extendTheme } from "@chakra-ui/react";

export const FinalProduct = () => {
  // 2. Update the breakpoints as key-value pairs
  const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  // 3. Extend the theme
  const theme = extendTheme({ breakpoints });

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <Navbar />
        <Flex justifyContent="space-between" w="100%">
          <Box display={{ base: "none", xl: "flex" }} w="20%">
            {" "}
            <SideNavbar />
          </Box>
          <Box w="100%">
            <Product />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
