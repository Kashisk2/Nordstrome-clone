import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Holyday() {
  return (
    <Box padding={'25px'} height={'700px'}>
      <Grid templateColumns={"repeat(5,1fr)"}>
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
              Holiday Gifts: Get Inspired
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
              Holiday Decor
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
              Stocking Stuffers
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
              Beauty Gifts
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
              Cozy Gifts
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
              Toys & Games
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
              UGG Shop
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
              Home Gifts Holiday Pajamas & Slippers
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
              Holiday Pajamas & Slippers
            </Text>
          </VStack>
        </GridItem>
        <GridItem><VStack align={"start"} >
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
            Gifts by Price


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
            Gifts Under $50


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
          Gifts Under $100


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
            Luxe Gifts

            </Text>
            
             
          </VStack></GridItem>
        <GridItem><VStack align={"start"} >
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
            >Gifts by Recipient

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
            >For the Party Host


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
            >For the Foodie


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
             For the Jewelry Lover


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
            >For the Adventurer


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
          For the Techie


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
            For the Sports Fan
            </Text>
             
          </VStack></GridItem>
        <GridItem><VStack align={"start"} >
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
             Holiday Help


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
           Free Pickup & Delivery


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
      Gift Cards


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
            Style Help


            </Text>
            <Text
              color="#393939"
              mb={'20px'}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
             Festive Events


            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              mt={'20px'}
              fontWeight={'700'}
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
         Gift Guides


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
             Cozy Gift Ideas
 
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
              
Gifts for Coffee Lovers
 
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
             
Gifts for Dog Lovers
            </Text>
             
          </VStack></GridItem>
          <GridItem alignItems={'start'}>
            <Image width={'100%'} height={'325px'} src="https://n.nordstrommedia.com/id/sr3/8b803bb8-d1a4-49a3-89b7-663e787d5205.jpeg?h=365&w=240&dpr=2"/>
            <Link>
Explore Our Gift Guide</Link>
          </GridItem>
      </Grid>
    </Box>
  );
}

export default Holyday;
