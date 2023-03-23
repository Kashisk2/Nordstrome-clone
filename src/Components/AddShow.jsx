import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const AddShow = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <Box p="10px">
      <Text fontSize="2rem" mt="8%" textAlign="center" fontWeight="bold">
        People also viewed
      </Text>
      <SimpleGrid columns={[2, 3, 5]}>
        {products.map((item) => (
          <Box m="3%" p="3%" key={item.id + Date.now() + item.product}>
            <Box>
              <Image
                width="100%"
                // height="100px"
                m="auto"
                src={item.searchImage}
                alt="picture"
              />
            </Box>

            <Box>{item.product}</Box>
            <Box>{item.price} ₹ </Box>

            <Box>{item.sizes} </Box>
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
    </Box>
  );
};
