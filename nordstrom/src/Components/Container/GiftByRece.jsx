import { Box, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TabsAll from './Tabs'
import ClogingSecation from "../../Images/ClogingSecation.png";
function GiftByRece() {
  return (
      <Box width={"100%"}>
          <VStack width={"100%"} gap='20px'>
              <Center>
                  <Text mt={'20px'} fontWeight={"700"} fontSize="21px" letterSpacing={"4.2px"}>
                      GIFTS BY RECIPIENT
                  </Text>
              </Center>
             <Box>
                  <Image src={ClogingSecation}/>
             </Box>
               
              
            
          </VStack>
      </Box>
  )
}

export default GiftByRece