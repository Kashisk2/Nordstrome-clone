import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
   
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Sale() { 
    const logedin = localStorage.getItem("logedin");
  return (
    <Box padding={"25px"} height={"700px"}>
      <Grid templateColumns={"repeat(6,1fr)"}>
        <GridItem>
          <VStack align={"start"} fontWeight={"700"}>
            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Sale: Get Inspired
            </Text>
            <Divider color={"black"} width={"80%"} orientation="horizontal" />

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Bestsellers
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Limited-Time Sale
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              New Markdowns
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Nordstrom Made Sale
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align={"start"}>
            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Women
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              New Markdowns
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Clothing
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Shoes
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Handbags & Wallets
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Jewelry
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Accessories
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Beauty
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Contemporary
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Designer
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Plus
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Petite
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align={"start"}>
            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Men
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              New Markdowns
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Clothing
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Shoes
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Accessories
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Grooming & Cologne
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Advanced Modern
            </Text>

            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Designer
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Women
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Men
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Kids
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align={"start"}>
            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Kids
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              New Markdowns
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Girls
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Boys
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Baby
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Baby Gear & Essentials
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Shoes
            </Text>

            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Young Adult
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Women
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Men
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Gender Inclusive
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack align={"start"}>
            <Text
              color="#393939"
              fontWeight={"700"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Home
            </Text>

            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Bedding & Bath
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Home Decor
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Electronics & Tech Accessories
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Luggage & Travel
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Tabletop & Kitchen
            </Text>

            <VStack gap={"15px"}>
              <Text
                color="#393939"
                fontWeight={"700"}
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                Beauty
              </Text>

              <Text
                color="#393939"
                fontWeight={"700"}
                borderBottom="2px solid transparent"
                _hover={{
                  cursor: "pointer",
                  borderBottom: "2px solid black",
                  transition: " border-color 300ms",
                  touchAction: "manipulation",
                }}
              >
                
             <Link to={logedin ? '/ProductPage' : '/login'}  >All Sale</Link>
              </Text>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem alignItems={"start"}>
          <Image
            width={"100%"}
            height={"325px"}
            src="https://n.nordstrommedia.com/id/sr3/8b803bb8-d1a4-49a3-89b7-663e787d5205.jpeg?h=365&w=240&dpr=2"
          />
          <Link>Explore Our Gift Guide</Link>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Sale;
