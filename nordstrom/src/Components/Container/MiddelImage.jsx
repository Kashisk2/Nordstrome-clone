import { Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import Service from "../../Images/Service.png";
import NordyPord from "../../Images/NordyPord.png";
import ShopByType from "../../Images/ShopByType.png";
function MiddelImage() {
  return (
    <VStack gap={'20px'} >
          <Heading
              fontSize={"21px"}
              fontWeight={"700"}
              letterSpacing="4.2px"
              lineHeight={"23.94px"}
              mt={'20px'}
          >
              SERVICES & EVENTS
          </Heading>
          <Image _hover={{ cursor: "pointer" }} src={Service} />
          <Image _hover={{ cursor: "pointer" }} src={NordyPord} />
          <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
          <Heading
              fontSize={"21px"}
              fontWeight={"700"}
              letterSpacing="4.2px"
              lineHeight={"23.94px"}
          >
              SHOP BY CATEGORY
          </Heading>
          <Image _hover={{ cursor: "pointer" }} src={ShopByType} />
    </VStack>
  )
}

export default MiddelImage