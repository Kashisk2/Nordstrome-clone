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
  Link,
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

import { useRef } from "react";
import InputBox from "./InputBox";
import SignInButton from "./SignInButton";

export default function Navbar() {
  return (
    <>
      <VStack
        width={"95%"}
        m={"auto"}
        mt={"25px"}
        backgroundColor={"transparent"}
      >
        <Flex justifyContent={"space-between"} width={"100%"} mb={"15px"}>
          <Box>
            <Image
              w={"198px"}
              h={"30px"}
              src="https://i.imgur.com/ubtddUO.png"
            />
          </Box>
       <InputBox/>
         <SignInButton/>
        </Flex>
        <Box width={"100%"} h={"0.4px"} backgroundColor={"gray.300"}></Box>
        <Flex w={"80%"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton
              _hover={{ borderBottom: "2px solid black" }}
              height={"26px"}
              border={"2px solid transparent"}
              color={"rgb(51,51,51)"}
              lineHeight={"22.5px"}
            >
              Open menu
            </MenuButton>
            <Portal>
              <Box width={"100%"}>
                <MenuList
                  boxShadow="lg"
                  border={"none"}
                  width="1200px"
                  p={"20px"}
                >
                  <Flex
                    width={"100%"}
                    m={"auto"}
                    justifyContent={"space-between"}
                  >
                    <Box fontWeight={"800"}>
                      <Image width={"100%"} src={HolydaySales} />
                    </Box>
                  </Flex>
                </MenuList>
              </Box>
            </Portal>
          </Menu>
          <Button
            fontWeight={"400"}
            fontSize={"16px"}
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "trasparent" }}
          >
            Holyday Gift
          </Button>
          <Menu>
            <MenuButton color={"rgb(51,51,51)"} lineHeight={"22.5px"}>
              Open menu
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>Menu 1</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Flex>
      </VStack>
    </>
  );
}
