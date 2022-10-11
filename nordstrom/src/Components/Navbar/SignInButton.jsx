import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./navbarSignUp.module.css";
import { CheckIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
function SignInButton() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
      <Box className={styles.dropdown} float={"right"}>
        <Button
          className={styles.dropbtn}
          p={"0px"}
          backgroundColor={"transparent"}
          _hover={{ backgroundColor: "transparent" }}
          color={"#515151"}
          _focus={{ backgroundColor: "transparent" }}
          fontSize={"16px"}
          fontWeight={"400"}
        >
          Sign up
        </Button>
        <ChevronDownIcon ml={"5px"} />
        <Box
          boxShadow={"lg"}
          padding="20px"
          w={"300px"}
          className={styles.dropdownContent}
        >
          <VStack align={"start"}>
            <Button
              fontWeight={"400ox"}
              width={"100%"}
              backgroundColor={"black"}
              color={"white"}
              _hover={""}
              borderRadius="none"
            >
              Sign In|Create Account
            </Button>
            <Text fontWeight={"700"} fontSize={"14px"}>
              Your Account
            </Text>
            <VStack>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <AiOutlineHeart />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Whishlist
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            <Flex align={"center"} gap="10px">
              <BsFillCartCheckFill />
              <Text
                color="#393939"
                borderBottom="2px solid transparent"
                fontSize={"16px"}
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Purchase
              </Text>
            </Flex>
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box className={styles.dropdown} float={"right"}>
        <AiOutlineShoppingCart fontSize={"25px"} />
      </Box>
    </Box>
  );
}

export default SignInButton;
