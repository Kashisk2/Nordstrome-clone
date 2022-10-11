import { Flex } from "@chakra-ui/react";
import { Product } from "../Pages/Product";
import Sidebar from "./Sidebar";

export const Flexes = () => {
  return (
    <Flex>
      <Sidebar />
      <Product />
    </Flex>
  );
};
