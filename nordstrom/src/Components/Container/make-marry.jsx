import { Box, Button, ButtonGroup, Flex, Text, VStack } from "@chakra-ui/react";

export default function MakeMarry() {
  return (
    <>
      <Flex width={"100%"}>
        <Box
          position={"relative"}
          width={"100%"}
          height={"268px"}
          backgroundSize="100%"
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          bgImage="url('https://n.nordstrommedia.com/id/058f9a9d-7da4-416a-be2b-62644d7dc5ba.png?h=300&amp;w=1608')"
        >
          <VStack right={"25%"} left={"25%"} top={"60%"} gap={{lg:"10px"}} position={"absolute"}>
            <Text
              fontSize={{ base: "12px", mg: "14px", lg: "18px", xl: "21px" }}
            >
              The best gifts for everyone you love, all in one place.
            </Text>
            <Flex >
              <Flex  gap={"10px"}>
                <Button
                  fontWeight={"400"}
                  _hover={{
                    border: "1px solid transparent",
                    background: "#e6e6e6",
                  }}
                  color={"#393939"}
                  fontSize={"16px"}
               
                  backgroundColor={"transparent"}
                  py={{base:'10px',md:'15px',lg:'25px'}}                             
                 px={{ base: '6px', md: '10px', lg: '15px' }}     
                  border={"1px solid black "}
                  borderRadius={"none"}
                >
                  Shop Gifts
                </Button>
                <Button
                  fontWeight={"400"}
                  _hover={{
                    border: "1px solid transparent",
                    background: "#e6e6e6",
                  }}
                  color={"#393939"}
                  fontSize={"16px"}
                  backgroundColor={"transparent"}
                  py={"25px"}
                  px={"15px"}
                  border={"1px solid black "}
                  borderRadius={"none"}
                >
                  Explore our gift guied
                </Button>
                <Button
                  fontWeight={"400"}
                  _hover={{
                    border: "1px solid transparent",
                    background: "#e6e6e6",
                  }}
                  color={"#393939"}
                  fontSize={"16px"}
                  backgroundColor={"transparent"}
                  py={"25px"}
                  px={"15px"}
                  border={"1px solid black "}
                  borderRadius={"none"}
                >
                  Shop Holiday Dressing
                </Button>
              </Flex>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
