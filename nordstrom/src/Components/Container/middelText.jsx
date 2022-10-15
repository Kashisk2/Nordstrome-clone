



import { Box, ChakraProvider, extendTheme, Flex, Image,   Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SignUpContex } from '../../Contex/SignupContex'
const breakpoints={
    mdl:'906px',
    lg:"1128px",
}
const theme =extendTheme({breakpoints})
function MiddelText() {
    const logedin = localStorage.getItem("logedin");
    const { userLogin }=useContext(SignUpContex)
  return (
    <ChakraProvider theme={theme}>

          <Box display={logedin && !userLogin ? "none" : "flex" }>

     
      <Flex mb={"50px"} width={"100%"} justifyContent={"space-between"}>
          <Image
              height={{base:'10px',lg:'14px'}}
              width={{base:'200px',mdl:'275px',lg:"auto"}}
              src="https://n.nordstrommedia.com/id/c30eb052-a9da-4529-95ed-0d1568cc55ad.png?h=22&w=536"
          ></Image>
          <Box display={"flex"} justifyContent={'center'} alignItems={"center"} flexDirection={"column"}>
              <Text
              textAlign={'center'}
                  fontSize={{base:'17px',lg:"21px"}}
                  color={"#383938"}
                  lineHeight={"1.14"}
                  fontWeight={"700"}
              >
                  Shop what you love—faster and easier.
              </Text>
                  <Text mt={"8px"} textAlign={'center'} fontSize={"15px"} textDecoration={"underline"}>
                  <Link to='/login'>Sign In or Create an Account</Link>
              </Text>
          </Box>
          <Image
                  height={{ base: '10px', lg: '14px' }}
                  width={{ base: '200px', mdl: '275px', lg: "auto" }}
              src="https://n.nordstrommedia.com/id/01471914-5c74-4e79-a258-af5f398b1a73.png?h=22&w=536"
          ></Image>
      </Flex>
          </Box>
      </ChakraProvider>

  )
}

export default MiddelText