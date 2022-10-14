import { Box, Center, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import { FinalProduct } from "./Components/FinalProduct";
import { SideNavbar } from "./Components/SideNavbar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import { RiArrowUpSLine } from "react-icons/ri";

import FirstImageDiv from "./Components/Container/Container";

import { Product } from "./Pages/Product";
import ProductDetails from "./Components/ProductDetails";
import ScrollToTop from "react-scroll-to-top";
// import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop
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
      <FirstImageDiv />
      <Footer /> */}
      {/* <Footer /> */}
      {/* <ProductDetails /> */}
      {/* <Navbar /> */}

      {/* <ProductDetails /> */}
      {/* <FirstImageDiv /> */}

      <FinalProduct />
    </div>
  );
}

export default App;
