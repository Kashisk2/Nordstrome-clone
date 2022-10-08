import { Box, Button, ButtonGroup, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function FirstImageDiv() {
  return (
    <VStack width={'95%'} m={'auto'} mt={'20px'}>
        <Flex mb={'50px'} width={'100%'} justifyContent={'space-between'}>
            <Image height={'14px'} src='https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536'></Image>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                
                <Text fontSize={'21px'} color={'#383938'} lineHeight={'1.14'} fontWeight={'700'}>
                    Shop what you love—faster and easier.
                </Text>
                <Text mt={'8px'} fontSize={'15px'} textDecoration={'underline'} >

                <Link>Sign In or Create an Account</Link>
                </Text>
               
            </Box>
             <Image mr={'-80px'} ml={'60px'} height={'14px'} src='https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536'></Image>
        </Flex>
   <Flex width={'100%'}>

        <Box position={'relative'}  width={ '100%'}  height={'271px'}  backgroundSize='100%' backgroundPosition={'center'} bgImage="url('https://n.nordstrommedia.com/id/058f9a9d-7da4-416a-be2b-62644d7dc5ba.png?h=300&amp;w=1608')">
        <VStack right={'25%'} left={'25%'} top={'60%'} position={'absolute'}>
            <Text fontSize={'21px'}>
                The best gifts for everyone you love, all in one place.
            </Text>
            <Flex >
                <ButtonGroup gap={'5px'}>

                <Button fontWeight={'400'} _hover={{border:"1px solid transparent",background:'#e6e6e6'}} color={'#393939'} fontSize={'16px'} backgroundColor={'transparent'} py={'25px'} px={'15px'} border={'1px solid black '} borderRadius={'none'}>Shop Gifts</Button>
                <Button fontWeight={'400'} _hover={{border:"1px solid transparent",background:'#e6e6e6'}} color={'#393939'} fontSize={'16px'} backgroundColor={'transparent'} py={'25px'} px={'15px'} border={'1px solid black '} borderRadius={'none'}>Explore our gift guied</Button>
                <Button fontWeight={'400'} _hover={{border:"1px solid transparent",background:'#e6e6e6'}} color={'#393939'} fontSize={'16px'} backgroundColor={'transparent'} py={'25px'} px={'15px'} border={'1px solid black '} borderRadius={'none'}>Shop Holiday Dressing</Button>
                </ButtonGroup>
            </Flex>
        </VStack>
        </Box>
   </Flex>
            {/* <Image src=''/>  */}

    </VStack>
  )
}

export default FirstImageDiv