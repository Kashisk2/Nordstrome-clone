import {
  Box,
  Button,
  Flex,
  Spacer,
  Image,
  ChakraProvider,
  Grid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { BsCart3 } from "react-icons/bs";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useCallback } from "react";

export const Payment = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  let getData = JSON.parse(localStorage.getItem("CartData")) || [];
  let totlePrice = JSON.parse(localStorage.getItem("totlePrice")) || 0;
  console.log(totlePrice);

  const handle = useCallback(() => {
    if (value === "" || value2 === "" || value3 === "") {
      notify2();
    } else {
      notify();
    }
  }, [value, value2, value3]);

  const CustomToast = () => {
    return (
      <Flex as="p" gap={10}>
        <Flex as="p" fontWeight="bold" mt="5px">
          {" "}
          Order Successful!{" "}
        </Flex>
        <Link to="/">
          <Button color="white" bg="#04B20A" border="1px solid white">
            Ok
          </Button>
        </Link>
      </Flex>
    );
  };

  const notify = () => {
    toast.success(<CustomToast />, {
      position: "top-center",
    });
  };
  const notify2 = () => {
    toast.error("Please Enter Full Details!", {
      position: "top-center",
    });
  };

  let globalTotal = 6543;

  return (
    <ChakraProvider>
      <Navbar />
      <Box className="mainPaymentPage">
        <form className="paymentCardDetails">
          <hr />
          <h1 className="paymentHeading">Payment</h1>
          <hr />
          <Flex as="p" className="billingText">
            My billing address is the same as my delivery address
          </Flex>
          <Flex as="p" className="creditDebitDetails">
            Credit or Debit Card
          </Flex>
          <Flex className="cardLogo" gap={5}>
            <img
              width={50}
              src="https://global.prd.borderfree.com/cdn/checkout/logos/visa.svg"
              alt="visa"
            />
            <img
              width={60}
              src="https://global.prd.borderfree.com/cdn/checkout/logos/mastercard.svg"
              alt="MasterCard"
            />
          </Flex>
          <Box>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="cardInputs1"
              type="number"
              placeholder="Card Number"
            />
          </Box>
          <Box>
            <input
              value={value2}
              onChange={(e) => {
                setValue2(e.target.value);
              }}
              className="cardInputs"
              type="text"
              placeholder="MM/YY"
            />
            <input
              value={value3}
              onChange={(e) => {
                setValue3(e.target.value);
              }}
              className="cardInputs"
              type="text"
              placeholder="Security Code"
            />
          </Box>
          <Box className="unionBox">
            <img
              width={50}
              src="https://global.prd.borderfree.com/cdn/checkout/logos/unionpay.svg"
              alt="unionPay"
            />
          </Box>
          <hr />
          <Box className="textOffer">
            <Flex as="p">
              Send me electronic or mail offers from Borderfree. You may opt out
              at any time.
            </Flex>
            <Flex as="p">
              Send me electronic or mail offers from Nordstrom. You may opt out
              at any time.
            </Flex>
          </Box>

          <Box>
            <div>
              <ToastContainer theme="colored" />
            </div>

            <Button
              onClick={handle}
              bg="#3D3D3D"
              color="white"
              _hover={{ bg: "black" }}
              className="Place-Btn"
            >
              Place Order
            </Button>
          </Box>
        </form>

        <Box className="paymentTotalDetails">
          <Flex as="p" className="paymentHeading2" gap={5}>
            <BsCart3 fontSize={43} /> Total payment
          </Flex>
          <Button
            onClick={handle}
            bg="#3D3D3D"
            color="white"
            _hover={{ bg: "black" }}
            className="Place-Btn2"
          >
            Place Order
          </Button>
          <Flex as="p" className="spacerItemText">
            Items <Spacer />₹{totlePrice}
          </Flex>
          <Flex as="p" className="spacerItemText">
            Shipping <Spacer />
            ₹3,080
          </Flex>
          <Flex as="p" className="spacerItemText">
            Duties & Taxes <Spacer />
            ₹3,463
          </Flex>

          {getData.map((elem) => {
            <Box display="none">{(globalTotal += elem.price)}</Box>;
          })}

          <Flex className="totalPrice" as="Heading">
            TOTAL <Spacer />
            <Flex as="p">{globalTotal}</Flex>
          </Flex>

          <hr />
          <Flex className="promoCode" color="skyblue">
            Promo Code
          </Flex>
          <hr />

          <Grid
            width={"100%"}
            maxH={"350px"}
            overflow={"scroll"}
            className="ProductDetaislSection"
          >
            {getData.map((elem) => (
              <Box>
                <Image key={elem} width={20} src={elem.searchImage} />
                <Box className="detailsProductRating">
                  {new Array(5).fill("").map((_, i) => (
                    <StarIcon
                      size={2}
                      key={i}
                      color={i < elem.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                </Box>
                <Box mt={2} width="70%">
                  <h1>{elem.product}</h1>
                </Box>
                <Box className="detailsProductBrand">{elem.brand}</Box>
                <Box className="detailsProductPrice">
                  <h1>INR {elem.price}.00</h1>
                </Box>
                <Box className="detailsProductDiscount">
                  {elem.discountDisplayLabel}
                </Box>
                <Box className="detailsProductMrp">
                  <h3>
                    <strike> INR {elem.mrp}.00</strike>
                  </h3>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
