import { Box, Center, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import { FinalProduct } from "./Components/FinalProduct";
import { SideNavbar } from "./Components/SideNavbar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";

import FirstImageDiv from "./Components/Container/Container";
import {Login} from "./Components/Login/Login"
import { Product } from "./Pages/Product";
import ProductDetails from "./Components/ProductDetails";
import ScrollToTop from "react-scroll-to-top";
import FadeInSection from "./Components/Fadein/Fadein";
import { Register } from "./Components/Login/Register";
import HomePage from "./Pages/HomePage";
// import Routes from "./Routes/Routes";
import RoutesAll from "./Routes/Routes";
// import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
{/* <HomePage/> */}
<RoutesAll/>
      {/* <Register/> */}
      {/* {/* <Footer /> */}
      {/* <ProductDetails /> */}
      {/* <Navbar /> */}

      {/* <ProductDetails /> */}
      {/* <FirstImageDiv /> */}

    </div>
  );
}

export default App;
