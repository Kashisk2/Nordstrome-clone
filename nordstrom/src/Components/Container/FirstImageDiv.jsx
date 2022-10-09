import { Box, Button, ButtonGroup, Center, Flex, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './FirstImageDIv.module.css'
import MakeMarry from './make-marry'
import TabsAll from './Tabs'
 

function FirstImageDiv() {
    const ref = useRef()
    const imageData = [
        'https://i.postimg.cc/Gh3hF38D/Screenshot-2022-10-09-152831.png',
        'https://i.postimg.cc/8z68WxHW/Screenshot-2022-10-09-152906.png',
        'https://i.postimg.cc/fyLpbPyV/Screenshot-2022-10-09-152952.png',
        'https://i.postimg.cc/T38N81VL/Screenshot-2022-10-09-153104.png'
    ]


    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (started) {
            return
        }

        setStarted(true)
        const id = setInterval(() => {

            setCount(pre => pre + 1)
            // console.log("first")

        }, 3000);
    }, [])


    if (count == 4) {
        setCount(0)
    }

    return (
        <VStack width={'95%'} m={'auto'} mt={'20px'}>
            <Flex mb={'50px'} width={'100%'} justifyContent={'space-between'}>
                <Image height={'14px'} width={'auto'} src='https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536'></Image>
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

            <MakeMarry />
            <Box width={"100%"}>

                <Image className={styles.fadeIn} width={"100%"} src={imageData[count]} />
            </Box>
            <Box width={"100%"}>
                <Image src='https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608' />
            </Box>
            <Box width={'100%'}>
                <VStack width={'100%'}>
                    <Center>
                        <Text fontWeight={'700'} fontSize='21px' letterSpacing={'4.2px'}>
                            GIFTS BY RECIPIENT</Text>
                    </Center>

                    <Box _hover={{ cursor: "pointer" }} position={'relative'} width={'100%'} height={'365px'} backgroundSize='100%' backgroundRepeat={'no-repeat'} backgroundPosition={'center'} bgImage="url('https://n.nordstrommedia.com/id/0c7312a9-d6ec-4235-bdf4-15b01fc042be.jpeg?h=395&w=1608')">

                        <Box position={'absolute'} bottom={'0'} right={'0'} left="0" width={'100'}>
                            <Flex justifyContent={'space-around'} width={'100%'} gap={'50'}>
                                <Text justifyContent={'center'} fontSize={'21px'} fontWeight={'700'}>For Her</Text>
                                <Text justifyContent={'center'} fontSize={'21px'} fontWeight={'700'}>For Him</Text>
                                <Text justifyContent={'center'} fontSize={'21px'} fontWeight={'700'}>For Kids</Text>
                                <Text justifyContent={'center'} fontSize={'21px'} fontWeight={'700'}>For Teens</Text>
                                <Text justifyContent={'center'} fontSize={'21px'} fontWeight={'700'}>All Gifts</Text>


                            </Flex>
                        </Box>
                    </Box>
                    <Flex justifyContent={'flex-start'} width="100%">
 
                    <TabsAll/>
                    </Flex>



                </VStack>
            </Box>
            


        </VStack>
    )
}

export default FirstImageDiv