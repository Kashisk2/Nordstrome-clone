import { Box, Center, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header(){
  return  <Box backgroundColor={"#3541b7"} display={'flex'} px={'20px'} justifyContent={'space-between'} alignItems={'center'}>
    <Text>

    </Text>

        <Text p={"9px"} fontSize={"16px"} lineHeight={'22.5px'} width={'1/3'} color={"white"} display={"flex"} justifyContent={'flex-start'} gap={'2px'} >
            <Text fontWeight={"700"}>Find the best gifts for everyone you love, all in one place.  </Text>
            <Spacer/>
            <Text textDecoration={"underline"}>Explore Our Gift Guide</Text>
        </Text>
    <Flex gap={'5px'} alignItems={'center'}>
        <Image borderRadius={'50%'} height={'16px'} w={'16px'} src="https://n.nordstrommedia.com/alias/IN.gif"/>
        <Box>

        <Text color={'white'} lineHeight={'22.5px'} m={'0'}>India</Text>        
        </Box>
    </Flex>
    
  </Box>
}