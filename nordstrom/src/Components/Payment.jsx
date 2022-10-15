import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import "../Components/Payment.css";
import { BsCart3 } from "react-icons/bs";

export const Payment = () => {
  return (
    <>
      <Box className="mainPaymentPage">
        <form className="paymentCardDetails">
          {/* <Box> */}
            <hr />
            <h1 className="paymentHeading">Payment</h1>
            <hr />
            <Flex as="p">
              My billing address is the same as my delivery address
            </Flex>
            <Flex as="p">Credit or Debit Card</Flex>
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
              <input className="cardInputs1" type="number" placeholder="Card Number" />
            </Box>
            <Box>
              <input className="cardInputs" type="number" placeholder="MM/YY" />
              <input className="cardInputs" type="text" placeholder="Security Code" />
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
                Send me electronic or mail offers from Borderfree. You may opt
                out at any time.
              </Flex>
              <Flex as="p">
                Send me electronic or mail offers from Nordstrom. You may opt
                out at any time.
              </Flex>
            </Box>
            <Box>
              <Button bg="orange" className="Place-Btn">Place Order</Button>
            </Box>
          {/* </Box> */}
        </form>

        <Box className="paymentTotalDetails">
          <Flex as="p" gap={5} fontSize={20}>
            <BsCart3 fontSize={30} /> Total payment
          </Flex>
          <Button width="70%">Place Order</Button>
          <Flex as="p">
            Items <Spacer />
            5,151
          </Flex>
          <Flex as="p">
            Shipping <Spacer />
            5,151
          </Flex>
          <Flex as="p">
            Duties & Taxes <Spacer />
            5,151
          </Flex>
          <Flex as="Heading">
            TOTAL <Spacer />
            5,151
          </Flex>
          <hr />
          <Flex color="skyblue">Promo Code</Flex>
          <hr />
          <Box className="ProductDetaislSection"></Box>
        </Box>
      </Box>
    </>
  );
};
