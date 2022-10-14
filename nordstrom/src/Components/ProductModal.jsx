import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
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

import { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

export const ProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState({});
  const [imgs, setImgs] = useState([]);

  // const id = useParams();
  // console.log(id);
  console.log("first");

  const getUsers = async () => {
    let response = await fetch("http://localhost:4001/products/9070277");
    let data = await response.json();
    // console.log(data);
    setUsers(data);
    setImgs(data.images);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box>
      <Button
        onClick={onOpen}
        className="loadingBtn"
        padding="10% 50%"
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
                <Carousel
                  showArrows={true}
                  autoPlay
                  // onChange={onChange}
                  // onClickItem={onClickItem}
                  // onClickThumb={onClickThumb}
                >
                  <div>
                    {imgs.map((elem) => (
                      <Image key={elem} src={elem.src} />
                    ))}
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                </Carousel>
              </Box>
              <Box width="40%" mt="-10px">
                <Box className="detailsProductRating">
                  {new Array(5).fill("").map((_, i) => (
                    <StarIcon
                      size={20}
                      key={i}
                      color={i < users.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                </Box>
                <Box fontSize={15} fontWeight="bold" mt={5}>
                  <h1>{users.product}</h1>
                </Box>
                <Box fontSize={20} fontWeight="bold" mt={5}>
                  {users.brand}
                </Box>
                <Box className="detailsProductPrice">
                  <h1>INR {users.price}.00</h1>
                </Box>
                <Box className="detailsProductDiscount">
                  {users.discountDisplayLabel}
                </Box>
                <Box className="detailsProductMrp">
                  <h3>
                    <strike> INR {users.mrp}.00</strike>
                  </h3>
                </Box>
              </Box>
            </HStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button onClick={onClose} bg="orange" width="100%" color="black">
              Checkout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
