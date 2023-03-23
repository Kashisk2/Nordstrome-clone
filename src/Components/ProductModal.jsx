import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import Carousel from "react-elastic-carousel";

import { useParams } from "react-router-dom";
import { StateContext } from "../Contex/StateContext";

export const ProductModal = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let quickViewData = JSON.parse(localStorage.getItem("quickViewData"));
  // const [item, setItem] = useState(quickViewData);

  let cartArray = JSON.parse(localStorage.getItem("CartData")) || [];

  const handleCartData = () => {
    cartArray.push(quickViewData);
    localStorage.setItem("CartData", JSON.stringify(cartArray));
    onclose();
  };
  // console.log(quickViewData);

  return (
    <Box>
      <Button
        onClick={onOpen}
        className="loadingBtn"
        // padding="10% 50%"
        padding={"10px 0px"}
        width={"100%"}
        margin={0}
        _hover={{ bg: "white" }}
      >
        <BsFillHandbagFill />
        Quick View
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Added to your bag.</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Box mr={5} width="65%">
                <Carousel>
                  {item.images.map((elem) => (
                    <Image key={elem} src={elem.src} height="200px" />
                  ))}
                </Carousel>
              </Box>
              <Box width="40%" mt="-10px">
                <Box className="detailsProductRating">
                  {new Array(5).fill("").map((_, i) => (
                    <StarIcon
                      size={20}
                      key={i}
                      color={i < item.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                </Box>
                <Box fontSize={15} fontWeight="bold" mt={5}>
                  <h1>{item.product}</h1>
                </Box>
                <Box fontSize={20} fontWeight="bold" mt={5}>
                  {item.brand}
                </Box>
                <Box className="detailsProductPrice">
                  <h1>INR {item.price}.00</h1>
                </Box>
                <Box className="detailsProductDiscount">
                  {item.discountDisplayLabel}
                </Box>
                <Box className="detailsProductMrp">
                  <h3>
                    <strike> INR {item.mrp}.00</strike>
                  </h3>
                </Box>
              </Box>
            </HStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              onClick={handleCartData}
              bg="orange"
              width="100%"
              color="black"
            >
              Add To Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
