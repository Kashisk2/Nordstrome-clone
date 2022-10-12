import "./ProductDetails.css";
import {
  Box,
  Image,
  HStack,
  Select,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Circle,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { ImGift } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// function VerticallyCenter() {

// return (
// <>

// </>
// )
// }

export default function ProductDetails() {
  const [users, setUsers] = useState({});
  const [imgs, setImgs] = useState([]);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUsers = async () => {
    let response = await fetch("http://localhost:4000/products/2466435");
    let data = await response.json();
    // console.log(data);
    setUsers(data);
    setImgs(data.images);
    
  };
  console.log(imgs, "array");

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box className="mainWebBox">
      <Box className="mainDivSection">
        {/* imagesSection Start */}
        <Box className="imageSection">
          <Box className="imgBox">
            {imgs.map((elem) => (
              <Image className="imgTag" key={elem} src={elem.src} />
            ))}
          </Box>
          <Box className="frontImage">
            <Image src={users.searchImage} />
          </Box>
        </Box>
        {/* imagesSection End */}

        {/* detailsSection */}

        <Box className="detailsSection">
          <Box className="detailsProductRating">
            {new Array(5).fill("").map((_, i) => (
              <StarIcon
                size={2}
                key={i}
                color={i < users.rating ? "teal.500" : "gray.300"}
              />
            ))}
          </Box>
          <Box className="detailsProductName">
            <h1>{users.product}</h1>
          </Box>
          <Box className="detailsProductBrand">{users.brand}</Box>
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
          <Box className="detailsProductDiscription">
            <p>
              A soft and lightweight knit enriches the comfort of a long lounge
              cardi that keeps you cozy around the house or out on errands.
            </p>
          </Box>
          <Box className="selectDiv">
            <Select placeholder="Size" className="detailsProductSize">
              <option value="option1">X-small/Small</option>
              <option value="option2">Medium</option>
              <option value="option3">Large/X-Large</option>
            </Select>
          </Box>
          <Box className="selectDiv">
            <Select
              placeholder="Choose a color"
              className="detailsProductColor"
            >
              <option value="option1">Indigo</option>
              <option value="option2">Black</option>
              <option value="option3">Soft Camel</option>
              <option value="option3">He Pewter/Pearl</option>
              <option value="option3">Purple Dusk</option>
              <option value="option3">Gray Skies</option>
            </Select>
          </Box>
          <Circle className="colorInCircle"></Circle>
          <Box>
            <Button onClick={onOpen} className="loadingBtn" gap={3} bg="Orange">
              <BsFillHandbagFill />
              Add to Bag
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">Added to your bag.</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <HStack>
                    <Box mr={5} width="60%">
                      <Image width={300} src={users.searchImage} />
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
                      <Box fontSize={20} fontWeight="bold" mt={5}>{users.brand}</Box>
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
                  <Button onClick={onClose} bg="orange" width="100%" color="black">Checkout</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Box className="wishlist">Add to wish list</Box>
        </Box>
        {/* mainDetailsSection End */}
      </Box>

      {/* reviewSection starts here */}

      <Box className="reviewMainSection">
        <Box className="reviewBox">
          <Box className="reviewBoxPart1">
            <Text as="b" fontSize={20}>
              Bold
            </Text>
            <UnorderedList>
              <ListItem className="paraDiscription">
                If between sizes, order one size down.
              </ListItem>
              <ListItem className="paraDiscriptionBtm">
                XS/S=2-6, M=8-10, L/XL=12-16.
              </ListItem>
            </UnorderedList>
            <Text as="b" fontSize={20}>
              DETAILS & CARE
            </Text>
            <Text as="p" className="paraDiscription">
              A soft and lightweight knit enriches the comfort of a long lounge
              cardi that keeps you cozy around the house or out on errands.
            </Text>
            <UnorderedList>
              <ListItem className="listPoints">
                25 1/2" front length; 30 1/2" back length (size Medium)
              </ListItem>
              <ListItem className="listPoints">Open front</ListItem>
              <ListItem className="listPoints">Long sleeves</ListItem>
              <ListItem className="listPoints">Front welt pockets</ListItem>
              <ListItem className="listPoints">75% nylon, 25% rayon</ListItem>
              <ListItem className="listPoints">
                Machine wash, tumble dry
              </ListItem>
              <ListItem className="listPoints">Imported</ListItem>
              <ListItem className="listPoints">Lingerie</ListItem>
              <ListItem className="listPoints">Item #1187633</ListItem>
            </UnorderedList>
            <Text as="p" className="shipingName">
              Free Shipping & Returns
            </Text>
          </Box>
          <Box className="reviewBoxPart1">
            <Text as="b" fontSize={20}>
              GIFT OPTIONS
            </Text>
            <Text as="p" className="paraDiscription">
              Choose your gift options at Checkout. Some items may not be
              eligible for all gift options.
            </Text>
            <h1 className="headNameFree">Free Pickup</h1>
            <Flex as="p" gap={2} className="headNameFreenew">
              <SiGooglemessages />
              Printed gift message(free)
            </Flex>
            <Flex as="p" gap={2}>
              <ImGift />
              Nordstrom gift box (free)
            </Flex>
            <Flex as="p" gap={2}>
              <ImGift />
              Signature gift wrap ($5)
            </Flex>
            <h1 className="headNameFree">Free Pickup</h1>
            <Flex as="p" gap={2} className="headNameFreenew">
              <GoMail />
              Email gift message (free)
            </Flex>
            <Flex as="p" gap={2}>
              <ImGift />
              Printed gift message(free)
            </Flex>
            <Flex as="p" gap={2}>
              <ImGift />
              DIY Nordstrom gift box($5)
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}