import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
   
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";

import HolydaySales from "../../Images/HolydaySales.png";
import {Link} from "react-router-dom"
import { useRef } from "react";
import InputBox from "./InputBox";
import SignInButton from "./SignInButton";
import NavbarTab from "./NavbarTab";

export default function Navbar() {
  return (
    <>
      <VStack
        width={"95%"}
        m={"auto"}
        mt={"40px"}
        mb={"60px"}
        backgroundColor={"transparent"}

      >
        <Flex justifyContent={"space-between"} width={"100%"} mb={"15px"}>
          <Box>
            <Link to="/">
       
            <Image
              w={"198px"}
              h={"30px"}
              src="https://i.imgur.com/ubtddUO.png"
            />
            </Link>
          </Box>
          <InputBox />
          <SignInButton />
        </Flex>
        <VStack  width={"100%"} gap={'20px'}>

        <Box width={"100%"} h={"0.4px"} backgroundColor={"gray.300"}></Box>
        <NavbarTab />
        </VStack>
      </VStack>
    </>
  );
}
