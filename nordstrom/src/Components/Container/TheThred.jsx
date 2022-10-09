import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ImageThree from '../../Images/ThreeImageBox.png'
function TheThred() {
  return (
     <Box>
        <Flex direction={'column'} align={'center'}>
          <Text fontSize={'21px'} fontWeight={'700'} letterSpacing='4.2px' lineHeight={'23.94px'}>THE THREAD</Text>
          <Text fontSize={'15px'} lineHeight={'21px'}>Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
          <Text fontSize={'15px'} lineHeight={'21px'} textDecoration={'underline'}> Get Inspired</Text>
          <Image _hover={{cursor:"pointer"}} src={ImageThree}/>
        </Flex>
     </Box>
  )
}

export default TheThred