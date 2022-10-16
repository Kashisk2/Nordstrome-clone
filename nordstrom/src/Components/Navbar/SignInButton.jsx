import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "./navbarSignUp.module.css";
import {
  CheckIcon,
  ChevronDownIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineMail,
} from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BsFillCartCheckFill, BsPersonFill } from "react-icons/bs";
import { GiWantedReward, GiSplitCross } from "react-icons/gi";
import { FaShuttleVan } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import { BiLock, BiStore } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import stylesSign from "./Signin.module.css";
import { useContext } from "react";
import { SignUpContex } from "../../Contex/SignupContex";
function SignInButton() {
  const logedin = localStorage.getItem("logedin");
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  console.log(userData + "kashi");
  const { handleLogin } = useContext(SignUpContex);
  const handleLogout = () => {
    localStorage.clear();
    handleLogin();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box
      display={"flex"}
      justifyContent={{ base: "space-between", md: "center" }}
      width={{ base: "100%", md: "auto" }}
      alignItems={"center"}
      gap={"10px"}
    >
      <Button
        display={{ base: "block", md: "none" }}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "#7aadc5" }}
        _focus={{ backgroundColor: "transparent" }}
      >
        <HamburgerIcon color={"black"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        

          <DrawerBody>
            <VStack
              _hover={{ cursor: "pointer" }}
              gap={"5px"}
              align={"start"}
              fontSize={"18px"}
            >
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Holyday Gifts</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Sale</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Women</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Men</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Kids</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Young Adult</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Activewear</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Home</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Beauty</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>Designer</Text>
              <Divider />
              <Text color="#393939"
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}>The Thread</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box display={"flex"} alignItems={"center"}>
        <Box className={styles.dropdown} float={"right"}>
          <Button
            className={styles.dropbtn}
            p={"0px"}
            mb={"0"}
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "transparent" }}
            color={"#515151"}
            _focus={{ backgroundColor: "transparent" }}
            fontSize={"16px"}
            fontWeight={"400"}
          >
            <Box display={{ base: "block", md: "none" }}>
              <BsPersonFill fontSize={"25px"} />
            </Box>
            <Text display={{ base: "none", md: "block" }}>
              {logedin ? "Hi" + " ," + userData.first_name : "Sign in"}
            </Text>
            <ChevronDownIcon
              display={{ base: "none", md: "block" }}
              ml={"5px"}
            />
          </Button>

          <Box
            boxShadow={"lg"}
            padding="20px"
            w={"300px"}
            className={styles.dropdownContent}
          >
            <VStack align={"start"}>
              {logedin ? (
                <Flex justifyContent={"space-between"} width={"100%"}>
                  <Text fontWeight={"700"}>
                    {userData.first_name}'s Account
                  </Text>
                  <Text
                    onClick={handleLogout}
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Link className={stylesSign.link} to="/">
                      <Text padding={"0"}>Sign out</Text>{" "}
                    </Link>
                  </Text>
                </Flex>
              ) : (
                <Link className={stylesSign.link} to={"/login"}>
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
                </Link>
              )}

              <Text
                display={logedin ? "none" : "flex"}
                fontWeight={"700"}
                fontSize={"14px"}
              >
                Your Account
              </Text>
              <VStack align={"start"}>
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
                  <GiWantedReward />
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
                    The Nordy Club Rewards
                  </Text>
                </Flex>
                <Flex align={"center"} gap="10px">
                  <FaShuttleVan />
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
                    Shipping Addresses
                  </Text>
                </Flex>
                <Flex align={"center"} gap="10px">
                  <MdOutlinePayment />
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
                    Payment Methods
                  </Text>
                </Flex>
                <Flex align={"center"} gap="10px">
                  <GiSplitCross />
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
                    Looks
                  </Text>
                </Flex>
                <Flex align={"center"} gap="10px">
                  <IoMdOpen />
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
                    Pay & Manage Nordstrom Card
                  </Text>
                </Flex>
              </VStack>
              <VStack align={"start"}>
                <Flex align={"center"} mt={"20px"} gap="10px">
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
                    Account settings
                  </Text>
                </Flex>
                <Flex align={"center"} mt={"20px"} gap="10px">
                  <BiLock />
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
                    Password & Personal Info
                  </Text>
                </Flex>
                <Flex align={"center"} mt={"20px"} gap="10px">
                  <AiOutlineMail />
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
                    Email & Mail Preferences
                  </Text>
                </Flex>
                <Flex align={"center"} mt={"20px"} gap="10px">
                  <BiStore />
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
                    Stores & Events
                  </Text>
                </Flex>
              </VStack>
              <VStack align={"start"}>
                <Text
                  color="#393939"
                  borderBottom="2px solid transparent"
                  fontSize={"14px"}
                  fontWeight={"700"}
                  _hover={{
                    cursor: "pointer",
                    borderBottom: "2px solid black",
                    transition: " border-color 300ms",
                    touchAction: "manipulation",
                  }}
                >
                  We're here to help, 24/7
                </Text>
                <Text
                  color="#393939"
                  borderBottom="2px solid transparent"
                  fontSize={"14px"}
                  _hover={{
                    cursor: "pointer",
                    borderBottom: "2px solid black",
                    transition: " border-color 300ms",
                    touchAction: "manipulation",
                  }}
                >
                  Contact Us
                </Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
        <Box className={styles.dropdown} float={"right"}>
          <AiOutlineShoppingCart fontSize={"25px"} />
        </Box>
      </Box>
    </Box>
  );
}

export default SignInButton;
