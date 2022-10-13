import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TabsAll from './Tabs'

function GiftByRece() {
  return (
      <Box width={"100%"}>
          <VStack width={"100%"} gap='20px'>
              <Center>
                  <Text mt={'20px'} fontWeight={"700"} fontSize="21px" letterSpacing={"4.2px"}>
                      GIFTS BY RECIPIENT
                  </Text>
              </Center>

              <Box
                  _hover={{ cursor: "pointer" }}
                  position={"relative"}
                  width={"100%"}
                  height={"400px"}
                  backgroundSize="100%"
                  backgroundRepeat={"no-repeat"}
                  backgroundPosition={"center"}
                  bgImage="url('https://n.nordstrommedia.com/id/0c7312a9-d6ec-4235-bdf4-15b01fc042be.jpeg?h=395&w=1608')"
              >
                  <Box
                      position={"absolute"}
                      bottom={"0"}
                      right={"0"}
                      left="0"
                      width={"100"}
                  >
                      <Flex justifyContent={"space-around"} width={"100%"} gap={"50"}>
                          <Text
                              justifyContent={"center"}
                              fontSize={"21px"}
                              fontWeight={"700"}
                          >
                              For Her
                          </Text>
                          <Text
                              justifyContent={"center"}
                              fontSize={"21px"}
                              fontWeight={"700"}
                          >
                              For Him
                          </Text>
                          <Text
                              justifyContent={"center"}
                              fontSize={"21px"}
                              fontWeight={"700"}
                          >
                              For Kids
                          </Text>
                          <Text
                              justifyContent={"center"}
                              fontSize={"21px"}
                              fontWeight={"700"}
                          >
                              For Teens
                          </Text>
                          <Text
                              justifyContent={"center"}
                              fontSize={"21px"}
                              fontWeight={"700"}
                          >
                              All Gifts
                          </Text>
                      </Flex>
                  </Box>
              </Box>
            
          </VStack>
      </Box>
  )
}

export default GiftByRece