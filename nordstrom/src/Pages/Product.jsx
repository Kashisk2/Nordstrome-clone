import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageContex } from "../Contex/PageContex";
import { getData } from "../Redux/action";

export const Product = () => {
  const { page, handleNextPage, handlePrevPage } = useContext(PageContex);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData(page));
  }, [page]);

  const handleId = (id) => {
    console.log(id);
  };
  // console.log(products);

  if (loading) {
    return (
      <Stack>
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
        <Skeleton height="30px" />
      </Stack>
    );
  }
  if (error) {
    return (
      <Box textAlign="center" m="15%">
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
        <Heading as="h5" size="sm">
          Sale & Clearance
        </Heading>
        <Select width="23%" placeholder="Select option">
          <option value="rating">Sort by customer rating</option>
          <option value="feature">Sort by featured</option>
          <option value="newest">Sort by newest</option>
          <option value="priceoff">Sort by price off</option>
          <option value="htl">Sort by price : High to Low</option>
          <option value="lth">Sort by price : Low to High</option>
        </Select>
      </Flex>

      <SimpleGrid columns={[2, 3, 4]}>
        {products.map((item) => (
          <Box
            m="3%"
            p="3%"
            key={item.id + Date.now() + item.product}
            onClick={() => handleId(item.id)}
            // border="1px solid red"
          >
            <Image width="80%" m="auto" src={item.searchImage} alt="picture" />
            <Flex width="80%" m="2% auto">
              <Button bg="black" borderRadius="50%" m="1%" size="sm"></Button>
              <Button bg="red" borderRadius="50%" m="1%" size="sm"></Button>
              <Button bg="blue" borderRadius="50%" m="1%" size="sm"></Button>
              <Button bg="yellow" borderRadius="50%" m="1%" size="sm"></Button>
            </Flex>
            <Box>{item.brand}</Box>
            <Box>{item.product}</Box>
            <Box color="red">{item.price} ₹ </Box>
            <Box color="red">{item.discountDisplayLabel}</Box>
            <Box textDecoration="line-through">{item.mrp} ₹</Box>
            <Box>
              {item.rating} ({item.ratingCount})
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center">
        <Button disabled={page === 1} onClick={handlePrevPage}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </Box>
    </Box>
  );
};
