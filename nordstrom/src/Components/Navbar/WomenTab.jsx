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

function WomenTab() {
  return (
    <Box padding={"25px"} height={"700px"}>
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
              Women: Get Inspired
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
              New Arrivals
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
              Black - Owned & -Founded Brands
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
              Nordstrom Made
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
              Make it Pop | Pop - In@Nordstrom
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
              Sports Fan Shop
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
              Sustainable Style
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
              Wedding Shop
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
              Activewear
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
              Blazers, Suits & Separates
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
              Coats & Jackets
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
              Dresses
            </Text>{" "}
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
              Jeans & Denim
            </Text>{" "}
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
              Jumpsuits & Rompers
            </Text>{" "}
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
              Lingerie, Hosiery & Shapewear
            </Text>{" "}
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
              Loungewear
            </Text>{" "}
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
              Pants & Leggings
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
              Booties
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
              For the Foodie
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
            >
              Boots
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
              Clogs
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
              Comfort
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
              Dress
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
              Flats Heels
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
              Mules & Slides
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
              Oxfords & Loafers
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
              Running Shoes
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
              Handbags
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
              Backpacks
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
              Belt Bags
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
              Clutches & Pouches
            </Text>
            <Text
              color="#393939"
              mb={"20px"}
              borderBottom="2px solid transparent"
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Crossbody Bags
            </Text>
            <Text
              color="#393939"
              borderBottom="2px solid transparent"
              mt={"20px"}
              fontWeight={"700"}
              _hover={{
                cursor: "pointer",
                borderBottom: "2px solid black",
                transition: " border-color 300ms",
                touchAction: "manipulation",
              }}
            >
              Designer Bags
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
              Shoulder Bags
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
              Tote Bags
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
              Wallets & Card Cases
            </Text>
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
                          Handbags
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
                          Backpacks
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
                          Belt Bags
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
                          Clutches & Pouches
                      </Text>
                      <Text
                          color="#393939"
                          mb={"20px"}
                          borderBottom="2px solid transparent"
                          _hover={{
                              cursor: "pointer",
                              borderBottom: "2px solid black",
                              transition: " border-color 300ms",
                              touchAction: "manipulation",
                          }}
                      >
                          Crossbody Bags
                      </Text>
                      <Text
                          color="#393939"
                          borderBottom="2px solid transparent"
                          mt={"20px"}
                          fontWeight={"700"}
                          _hover={{
                              cursor: "pointer",
                              borderBottom: "2px solid black",
                              transition: " border-color 300ms",
                              touchAction: "manipulation",
                          }}
                      >
                          Designer Bags
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
                          Shoulder Bags
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
                          Tote Bags
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
                          Wallets & Card Cases
                      </Text>
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

export default WomenTab;
