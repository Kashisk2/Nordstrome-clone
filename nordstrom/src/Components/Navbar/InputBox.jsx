import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import React from 'react'
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '1080px',
  xl: '1200px',
  '2xl': '1536px',
}
function InputBox() {
  return (
       <Box>
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
                  width={"655px"}
                  type="text"
                  placeholder="Search for products and brands"
                />
              </InputGroup>
            </Stack>
          </Box>
  )
}

export default InputBox