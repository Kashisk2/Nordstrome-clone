import { SearchIcon } from '@chakra-ui/icons'
import { Box, ChakraProvider, extendTheme, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
 
function InputBox() {
  return (
    <ChakraProvider>
     
       <Box width={{base:'100%',md:'auto'}}>
            <Stack spacing={4} width={'100%'}>
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
                  width= {{base:'100%',md:'400px',lg:'655px'}}
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