import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Components/Footer/Footer";
// import { Login } from "../Components/Login/Login";
import { Register } from "../Components/Login/Register";
import Header from "../Components/Navbar/Header";
import Navbar from "../Components/Navbar/Navbar";
const theme = extendTheme({
  fonts: {
    heading: `Brandon Text,Arial,sans-serif`,
    body: `Brandon Text,Arial,sans-serif`,
  },
});
function RegisterPage() {
  return (
    <>
      <ChakraProvider theme={theme}>
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
        <Header />
        <Navbar />
      </ChakraProvider>
      <Register />
      <ChakraProvider theme={theme}>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default RegisterPage;
