import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { CartBag } from "./CartBag";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CartLater } from "./CartLater";
import { useContext } from "react";
import { StateContext } from "../../Contex/StateContext";

export const Cartpage = () => {
  const { bagLength, laterBagLen } = useContext(StateContext);

  return (
    <Box p="5%">
      <Tabs>
        <TabList border="none">
          <NavLink to="/cartbag">
            <Tab border="1px solid black">Shoping Bag ({bagLength})</Tab>
          </NavLink>

          <NavLink to="cartlater">
            {" "}
            <Tab border="1px solid black">Save for later ({laterBagLen})</Tab>
          </NavLink>
        </TabList>
      </Tabs>

      <Routes>
        <Route path="/cartbag" element={<CartBag />}></Route>
        <Route path="/cartlater" element={<CartLater />}></Route>
      </Routes>
    </Box>
  );
};
