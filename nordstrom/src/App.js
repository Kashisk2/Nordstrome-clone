import { Box, Center, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import { FinalProduct } from "./Components/FinalProduct";
import { SideNavbar } from "./Components/SideNavbar";
import {ScrollToTop} from "react-scroll-to-top"
import { Product } from "./Pages/Product";
import { RiArrowUpSLine } from "react-icons/ri"

import Footer from "./Components/Footer/Footer"
import Header from "./Components/Navbar/Header"
import Navbar from "./Components/Navbar/Navbar"
import FirstImageDiv from "./Components/Container/Container"
function App(){
  return (
    <div className="App">
      {/* <ScrollToTop 
        smooth={"true"}
        viewBox={"0 0 30 30"}
        
        component={
          <Box>
            <Center>

            <RiArrowUpSLine size={'20px'} width={'400'} />
            </Center>
            <Text color={"#393939"} fontSize={"13px"}>
              Top
            </Text>
          </Box>
        }
      />
      <Header/>
      <Navbar />
      <FirstImageDiv /> */}
      {/* <Footer /> */}
      <FinalProduct/>
    </div>
  );
}

export default App;
