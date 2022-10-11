import { Flex } from "@chakra-ui/react";
import "./App.css";
import { Flexes } from "./Components/Flexes";

import Sidebar from "./Components/Sidebar";
import { Product } from "./Pages/Product";

function App() {
  return (
    <Flex>
      <Sidebar />;
      <Product />;
    </Flex>
  );

  return;
  // <Flexes />;
}

export default App;
