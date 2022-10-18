import styles from "./product.module.css";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Grid,
  SkeletonText,
  SkeletonCircle,
  ChakraProvider,
} from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { useSelector } from "react-redux";
import { StateContext } from "../Contex/StateContext";
import { ProductModal } from "../Components/ProductModal";
import { Link } from "react-router-dom";
import { SideNavbar } from "../Components/SideNavbar";

export const handlequickViewData = (item) => {
  // console.log(item);
  let quickViewData = item;

  localStorage.setItem("quickViewData", JSON.stringify(quickViewData));
};
let cartArray = JSON.parse(localStorage.getItem("CartData")) || [];

export const Product = () => {
  const { products, loading, error } = useSelector((state) => state.product);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const {
    setSortby,
    setSortbyType,
    selectvalue,
    setSelectValuue,
    length,
    page,
    setPage,
  } = useContext(StateContext);

  products.map((ele) => (ele.count = 1));
  // console.log(products);
  // function for sorting
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, " ", value);
    setSelectValuue(value);

    if (value === "rating") {
      setSortby("desc");
      setSortbyType("rating");
    } else if (value === "pricedesc") {
      setSortby("desc");
      setSortbyType("price");
    } else if (value === "pricease") {
      setSortby("ase");
      setSortbyType("price");
    } else if (value === "discount") {
      setSortby("desc");
      setSortbyType("discountDisplayLabel");
    } else if (value === "") {
      setSortby();
      setSortbyType();
    }
  };

  if (loading) {
    return (
      <ChakraProvider>
        <Box boxShadow="lg" bg="white" w="100%">
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={7} spacing="4" />
          </Box>
          <Grid templateColumns="repeat(4,1fr)" mt={"30px"} gap="20px">
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
            <Skeleton height="300px" />
          </Grid>
        </Box>
      </ChakraProvider>
    );
  }
  if (error) {
    return (
      <Box textAlign="center" m="15%" marginLeft="25%">
        <Spinner
          thickness="10px"
          speed="0.50s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Heading>Somethings went wrong , please refresh the page.</Heading>
      </Box>
    );
  }
  return (
    <Box>
      <Box>
        <Image
          src="	https://n.nordstrommedia.com/id/748369e6-331e-453f-83f6-ba94c3c7bdae.png?h=417&w=1334"
          alt="Dan Abramov"
        />
      </Box>

      <Flex justifyContent="space-between" padding="1% 5%">
        <Box>
          <Heading as="h5" size="sm">
            Sale & Clearance
          </Heading>
          <Flex alignItems="center">
            <Box display={{ base: "flex", xl: "none" }}>
              <Button
                ref={btnRef}
                colorScheme="white"
                // p="0 6px"
                color="black"
                border="1px solid black"
                onClick={onOpen}
              >
                Filter
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
                    <SideNavbar />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Text m="20px"> {length} items</Text>
          </Flex>
        </Box>
        <Select
          width="23%"
          value={selectvalue}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Sort by featured</option>
          <option value="rating">Sort by customer rating</option>
          <option value="newest">Sort by newest</option>
          <option value="discount">Sort by price off</option>
          <option value="pricedesc">Sort by price : High to Low</option>
          <option value="pricease">Sort by price : Low to High</option>
        </Select>
      </Flex>

      <SimpleGrid columns={[1, 2, 4]}>
        {products.map((item) => (
          <Box m="3%" p="3%" key={item.id + Date.now() + item.product}>
            <Box className={styles.container}>
              <Link to={`/ProductPage/${item.id}`}>
                <Image
                  className={styles.img}
                  width="100%"
                  m="auto"
                  src={item.searchImage}
                  alt="picture"
                />
              </Link>{" "}
              <Box
                className={styles.quickView}
                onClick={() => handlequickViewData(item)}
              >
                <ProductModal item={item} />
              </Box>
            </Box>

            <Flex width="80%" m="2% auto">
              <Button bg="black" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="red" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="blue" borderRadius="50%" m="3%" size="xs"></Button>
              <Button bg="yellow" borderRadius="50%" m="3%" size="xs"></Button>
            </Flex>
            <Box>{item.brand}</Box>
            <Box>{item.product}</Box>
            <Box color="red">{item.price} ₹ </Box>
            <Box color="red">{item.discountDisplayLabel}</Box>
            <Box textDecoration="line-through">{item.mrp} ₹ </Box>
            <Box>
              {Math.floor(item.rating) === 5 ? (
                <Box>&#9733;&#9733;&#9733;&#9733;&#9733;</Box>
              ) : Math.floor(item.rating) === 4 ? (
                <Box>&#9733;&#9733;&#9733;&#9733;&#9734;</Box>
              ) : Math.floor(item.rating) === 3 ? (
                <Box>&#9733;&#9733;&#9733;&#9734;&#9734;</Box>
              ) : Math.floor(item.rating) === 2 ? (
                <Box>&#9733;&#9733;&#9734;&#9734;&#9734;</Box>
              ) : Math.floor(item.rating) === 1 ? (
                <Box>&#9733;&#9734;&#9734;&#9734;&#9734;</Box>
              ) : (
                <Box>&#9734;&#9734;&#9734;&#9734;&#9734;</Box>
              )}{" "}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          disabled={page === Math.ceil(length / 20)}
          onClick={() => setPage(page + 1)}
          _hover={{ color: "blue" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
