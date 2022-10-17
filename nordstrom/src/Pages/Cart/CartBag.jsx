import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaShuttleVan } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import payment from "./img/payment.png";
import style from "./Cart.module.css";
import { StateContext } from "../../Contex/StateContext";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CartBag = () => {
  // for get data in advertisements
  const { products } = useSelector((state) => state.product);

  // data get in localStorage for bag by click add to cart
  let cartDataArray = JSON.parse(localStorage.getItem("CartData")) || [];

  // initiae array which i get  from cartDataArray
  const [data, setData] = useState(cartDataArray);
  // console.log(data);
  // for get length of data
  let totleItem = cartDataArray.length;
  // for get totle price in checkout button
  let totlePrice = 0;

  //   length of bag data send to cart page compound for showing length in tab
  const { bagLength, setBagLength } = useContext(StateContext);
  setBagLength(totleItem);

  // for render page to show increment and decrement
  const [counting, setCounting] = useState(0);

  // remove data from bag data
  const handleRemove = (ind) => {
    console.log(ind);
    const removeData = cartDataArray.filter((item) => item.id !== ind);
    console.log(removeData);
    setData(removeData);
    localStorage.setItem("CartData", JSON.stringify(removeData));
  };

  let laterBagArray = JSON.parse(localStorage.getItem("laterBag")) || [];

  //  SaveData to localStorage and go later data  also removeData from localStorage
  const handleLater = (item, id) => {
    const laterBag = cartDataArray.filter((item) => item.id !== id);
    setData(laterBag);
    laterBagArray.push(item);
    localStorage.setItem("CartData", JSON.stringify(laterBag));
    localStorage.setItem("laterBag", JSON.stringify(laterBagArray));
  };

  // for decreament quantity of products in cart
  const handleDecrement = (index) => {
    data[index].count--;
    setData(data);
    localStorage.setItem("CartData", JSON.stringify(data));
    setCounting(data[index].count);
  };

  // for increment quantity of products in cart
  const handleIncreament = (index) => {
    data[index].count++;
    setData(data);
    localStorage.setItem("CartData", JSON.stringify(data));
    setCounting(data[index].count);
  };

  // for showing this when  data is not available
  if (bagLength <= 0) {
    return (
      <Box>
        <Box m="3% 0">
          <Text fontSize="2rem">Your bag is empty</Text>
          <Button
            p="2% 8%"
            m="1% 0"
            bg="none"
            border="1px solid black"
            borderRadius={"none"}
            _hover={{ border: "none", bg: "#e3e3e3" }}
          >
            Continue Shopping
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
        <Box>
          <Text fontSize="3rem" mt="5%">
            People also viewed
          </Text>
          <SimpleGrid columns={[3, 4, 5]}>
            {products.map((item) => (
              <Box m="3%" p="3%" key={item.id + Date.now() + item.product}>
                <Box>
                  <Link to={`${item.id}`}>
                    <Image
                      width="100%"
                      // height="100px"
                      m="auto"
                      src={item.searchImage}
                      alt="picture"
                    />
                  </Link>{" "}
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
      </Box>
    );
  }

  // for showing data when available--------------------------------------------------
  return (
    <Box>
      <Box>
        <Text fontSize={"2rem"} m="2% 0">
          Shopping Bag
        </Text>
        <Text p="1% 0">Items in your bag are not on hold.</Text>
        <Flex alignItems="center">
          {" "}
          <GoGift />
          <Text p="0 1%">Choose gift options when you check out.</Text>
        </Flex>
        <hr />
        <Box m="3% 0">
          <Flex alignItems="center">
            <FaShuttleVan />
            <Text fontSize="1.5rem" p="0 1%">
              Delivery ({bagLength} items) to{" "}
              <span className={style.blueColore}>India</span>
            </Text>
          </Flex>
          <Text m="0 2%">International shipping</Text>
        </Box>
      </Box>
      <hr />

      {data.map((item, index) => (
        <Box fontSize="0.8em" key={item.id + Date.now() + Math.random()}>
          <Box display="none"> {(totlePrice += item.price * item.count)}</Box>
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

                <Flex margin="3% 1%">
                  <Button
                    disabled={item.count === 1}
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </Button>
                  <Button>{item.count}</Button>
                  <Button onClick={() => handleIncreament(index)}>+</Button>
                </Flex>

                <Flex gap="5%" fontSize={18}>
                  <button
                    className={style.blueColore}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className={style.blueColore}
                    onClick={() => handleLater(item, item.id)}
                  >
                    Save for later
                  </button>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Checkbox isDisabled borderRadius="50%" m="5% 0" color="black">
                  Not available for pickup
                </Checkbox>

                <br />

                <label htmlFor="checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id="checkbox"
                    className={style.checkbox_round}
                  />
                  Delivery
                  <Text m="1% 8%">
                    International orders usually arrive within 5–13 business
                    days. We'll give you delivery dates in checkout.
                  </Text>
                </label>
              </Box>
              <Box textAlign={"center"} m="3%">
                ₹{item.price * item.count}
              </Box>
            </Flex>
          </SimpleGrid>
          <hr />
        </Box>
      ))}

      <SimpleGrid columns={[1, null, 2]} gap="10%" m="2% 0">
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
        <Box>
          <Flex justifyContent="space-between" m="2% 0">
            <Text>Subtotal</Text>
            <Text>₹ {totlePrice}</Text>
          </Flex>
          <hr />
          <Button
            m="2% 0"
            p="6% 40%"
            borderRadius="none"
            bg="black"
            color="white"
            _hover={{ bg: "rgb(41, 38, 38)" }}
          >
            Check Out
          </Button>
        </Box>
      </SimpleGrid>

      <Box>
        <Text fontSize="3rem" mt="5%">
          People also viewed
        </Text>
        <SimpleGrid columns={[3, 4, 5]}>
          {products.map((item) => (
            <Box m="3%" p="3%" key={item.id + Date.now() + item.product}>
              <Box>
                <Link to={`${item.id}`}>
                  <Image
                    width="100%"
                    // height="100px"
                    m="auto"
                    src={item.searchImage}
                    alt="picture"
                  />
                </Link>{" "}
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
    </Box>
  );
};
