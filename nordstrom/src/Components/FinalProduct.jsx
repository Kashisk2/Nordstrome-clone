import { Flex } from "@chakra-ui/react";
import React from "react";
import { Product } from "../Pages/Product";
import { SideNavbar } from "./SideNavbar";

export const FinalProduct = () => {
  return (
    <Flex>
      <SideNavbar />
      <Product />
    </Flex>
  );
};
