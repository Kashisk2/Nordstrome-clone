import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Image,
} from "@chakra-ui/react";
import WomenProduct from "../../Images/WomenProduct.png";
import MansProducs from "../../Images/MansProducs.png";
import KidsProducs from "../../Images/KidsProducs.png";
function TabsAll() {
  return (
    <Tabs colorScheme={"black"} width={"100%"}>
      <TabList mt={'20px'} >
        <Flex width="55%" justifyContent={"space-around"}>
          <Tab
            width={"25%"}
            _active={{ backgroundColor: "transparent" }}
            borderBottom={"4px solid"}
            fontSize={"19px"}
            
            lineHeight={"26.6px"}
          >
            Women
          </Tab>
          <Tab
            width={"25%"}
            _active={{ backgroundColor: "transparent" }}
            borderBottom={"4px solid"}
            fontSize={"19px"}
            lineHeight={"26.6px"}
          >
            Men
          </Tab>
          <Tab
            width={"25%"}
            _active={{ backgroundColor: "transparent" }}
            borderBottom={"4px solid"}
            fontSize={"19px"}
            lineHeight={"26.6px"}
          >
            Kids
          </Tab>
            
        </Flex>
      </TabList>

      <TabPanels width={"100%"}>
        <TabPanel>
          <Image _hover={{ cursor: "pointer" }} src={WomenProduct} />
        </TabPanel>
        <TabPanel>
          <Image _hover={{ cursor: "pointer" }} src={MansProducs} />
        </TabPanel>
        <TabPanel>
          <Image _hover={{ cursor: "pointer" }} src={KidsProducs} />
        </TabPanel>
    
      </TabPanels>
    </Tabs>
  );
}

export default TabsAll;
