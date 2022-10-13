import { Flex } from "@chakra-ui/react";
import "./App.css";
import { SideNavbar } from "./Components/SideNavbar";

import { Product } from "./Pages/Product";

function App() {
  return (
    <Flex>
      <SideNavbar />
      <Product />;
    </Flex>
  );
}

export default App;
