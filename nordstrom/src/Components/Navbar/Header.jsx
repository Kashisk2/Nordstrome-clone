import { Box, Center, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      backgroundColor={"black"}
      display={"flex"}
      height={'41px'}
      px={"40px"}
      
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      
      <Text></Text>

      <Text
        p={{base:'0px',headrefont:"12px"}}
        fontSize={{ base: '10px', sm: '10px',headrefont:'12px',md:'14px',lg:'16px'}}
        lineHeight={"22.5px"}
        width={"1/3"}
        color={"white"}
        display={"flex"}
        flexDirection={{base:'column',headrefont:'row'}}
        justifyContent={{base:'center',headrefont:"flex-start"}}
        alignItems={'center'}
    
        gap={{base:'1px',headrefont:"2px"}}
      >
        <Text fontWeight={"700"}>
          Find the best gifts for everyone you love, all in one place.{" "}
        </Text>
        <Spacer />
        <Text textDecoration={"underline"}>Explore Our Gift Guide</Text>
      </Text>
      <Flex gap={"5px"} alignItems={"center"}>
        <Image
          borderRadius={"50%"}
          height={"16px"}
          w={"16px"}
          src="https://n.nordstrommedia.com/alias/IN.gif"
        />
        <Box>
          <Text color={"white"} lineHeight={"22.5px"} m={"0"}>
            India
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
