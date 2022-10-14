import { SearchIcon } from '@chakra-ui/icons'
import { Box, ChakraProvider, extendTheme, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
const breakpoints = {
  sm: '320px',
  md: '600px',
  sk:'749px',
  lg: '1046px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme=extendTheme({breakpoints})
function InputBox() {
  return (
    <ChakraProvider theme={theme}>
     
       <Box >
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input
                  _focus={{ border: "1px solid black", boxShadow: "none" }}
                  borderRadius={"0px"}
                  border={"1px solid #bbb"}
                  height={"45px"}
                  width= {{base:'100px',sm:'200px',md:'300px',sk:'400px',lg:'655px'}}
                  type="text"
                  placeholder="Search for products and brands"
                />
              </InputGroup>
            </Stack>
          </Box>

    </ChakraProvider>
  )
}

export default InputBox