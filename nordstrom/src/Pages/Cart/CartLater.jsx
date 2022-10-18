import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import payment from "./img/payment.png";
import style from "./Cart.module.css";
import React, { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../Contex/StateContext";
import { Link } from "react-router-dom";
import { AddShow } from "../../Components/AddShow";

export const CartLater = () => {
  // for get data in advertisements

  // data get in localStorage for later by bag
  let LaterDataArray = JSON.parse(localStorage.getItem("laterBag")) || [];
  // initiae array which i get  from LaterDataArray
  const [data, setData] = useState(LaterDataArray);

  // console.log(data);
  // for get length of data
  let totleItem = LaterDataArray.length;

  //   length of later data send to cart page compound for showing length in tab
  const { laterBagLen, setLaterBagLen } = useContext(StateContext);
  setLaterBagLen(totleItem);

  // remove data from later data
  const handleRemove = (id) => {
    const removeData = LaterDataArray.filter((item) => item.id !== id);
    setData(removeData);
    localStorage.setItem("laterBag", JSON.stringify(removeData));
  };

  // again moveData to localStorage and go bag data  also removeData from localStorage
  let MoveToBag = JSON.parse(localStorage.getItem("CartData")) || [];
  const handleMoveBag = (item, id) => {
    const MoveBag = LaterDataArray.filter((item) => item.id !== id);
    setData(MoveBag);
    MoveToBag.push(item);
    localStorage.setItem("laterBag", JSON.stringify(MoveBag));
    localStorage.setItem("CartData", JSON.stringify(MoveToBag));
  };

  // for showing this when data is not available
  if (laterBagLen <= 0) {
    return (
      <Box>
        <Box m="3% 0">
          <Text fontSize="2rem">You have no saved items</Text>
          <Button
            p="2% 8%"
            m="1% 0"
            bg="none"
            border="1px solid black"
            borderRadius={"none"}
            _hover={{ border: "none", bg: "#e3e3e3" }}
          >
            <Link>Continue Shopping</Link>
          </Button>
          <Box>
            <Text m="2% 0">Accepted Payment Methods</Text>
            <img src={payment} alt="" />
            <Text m="2% 0">
              Need help? Call 1.888.282.6060 or{" "}
              <span className={style.blueColore}>chat with us</span>
              <br />
              <span className={style.blueColore}>
                Shipping internationally?
              </span>
            </Text>
          </Box>
        </Box>
        <AddShow />
      </Box>
    );
  }

  // for showing data when available--------------------------------------------------

  return (
    <Box>
      <Box>
        <Text fontSize={"2rem"} m="2% 0">
          Saved for Later
        </Text>
      </Box>
      <hr />

      {data.map((item) => (
        <Box fontSize="0.8em" key={item.id + Date.now() + Math.random()}>
          <SimpleGrid columns={[1, null, 2]} gap="2%" m="2% 0">
            <Flex>
              <Box m="5% 0">
                <Image height={150} src={item.searchImage} />
              </Box>
              <Box m="0 3%">
                <Text m="5% 0">{item.product}</Text>
                <Text>Size: {item.sizes}</Text>
                <Text>Brand: {item.brand}</Text>
                <Text>Item: {item.id}</Text>

                <Flex gap="5%" margin="10% 0" fontSize={18}>
                  <button
                    className={style.blueColore}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className={style.blueColore}
                    onClick={() => handleMoveBag(item, item.id)}
                  >
                    Move to bag
                  </button>
                </Flex>
              </Box>
            </Flex>
            <Flex justifyContent="space-around" alignItems="center">
              <Box>Qty:{item.count}</Box>
              <Box textAlign={"center"} m="3%">
                ₹{item.price * item.count}
              </Box>
            </Flex>
          </SimpleGrid>
          <hr />
        </Box>
      ))}

      <Box>
        <Text m="2% 0">Accepted Payment Methods</Text>
        <img src={payment} alt="" />
        <Text m="2% 0">
          Need help? Call 1.888.282.6060 or{" "}
          <span className={style.blueColore}>chat with us</span>
          <br />
          <span className={style.blueColore}>Shipping internationally?</span>
        </Text>
      </Box>

      <AddShow />
    </Box>
  );
};
