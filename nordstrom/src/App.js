import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Navbar/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Box, Center, extendTheme, Text } from "@chakra-ui/react";
import FirstImageDiv from "./Components/Container/FirstImageDiv";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <ScrollToTop
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
      <Header />
      <Navbar />
      <FirstImageDiv />
      <Footer />
    </div>
  );
}

export default App;
