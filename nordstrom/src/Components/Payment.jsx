import { Box, Button, Flex, Spacer, Image, ChakraProvider, Grid } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import "./Payment.css";
import { BsCart3 } from "react-icons/bs";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export const Payment = () => {
  let getData = JSON.parse(localStorage.getItem("CartData")) || [];
  console.log(getData);

  let globalTotal = 6543;

  return (
    <ChakraProvider>
      <Navbar/>
      <Box className="mainPaymentPage">
        <form className="paymentCardDetails">
          {/* <Box> */}
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
              className="cardInputs1"
              type="number"
              placeholder="Card Number"
            />
          </Box>
          <Box>
            <input className="cardInputs" type="number" placeholder="MM/YY" />
            <input
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
            <Button bg="orange" className="Place-Btn">
              Place Order
            </Button>
          </Box>
          {/* </Box> */}
        </form>

        <Box className="paymentTotalDetails">
          <Flex as="p" className="paymentHeading2" gap={5}>
            <BsCart3 fontSize={43} /> Total payment
          </Flex>
          <Button className="Place-Btn2" bg="Orange">
            Place Order
          </Button>
          <Flex as="p" className="spacerItemText">
            Items <Spacer />
            5,151
          </Flex>
          <Flex as="p" className="spacerItemText">
            Shipping <Spacer />
            ₹ 3,080
          </Flex>
          <Flex as="p" className="spacerItemText">
            Duties & Taxes <Spacer />
            ₹ 3,463
          </Flex>

          {getData.map((elem) => {
            <Box display="none">{globalTotal+=elem.price}</Box>
          })}

          <Flex className="totalPrice" as="Heading">
            TOTAL <Spacer />
            <Flex as="p">{globalTotal}</Flex>
          </Flex>

          <hr />
          <Flex className="promoCode" color="skyblue">Promo Code</Flex>
          <hr />
  
          <Grid width={'100%'}   maxH={'350px'} overflow={'scroll'} className="ProductDetaislSection">
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
      <Footer/>
    </ChakraProvider>
  );
};
