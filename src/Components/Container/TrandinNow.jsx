import { Box, Heading, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AnimatatedImage from './AnimatatedImage'
import Hispanic from "../../Images/Hispanic.png";
import Tranding1 from "../../Images/Tranding1.png";
import Tranding2 from "../../Images/Tranding2.png";
import Tranding3 from "../../Images/Tranding3.png";
const imageDataTranding = [Tranding1, Tranding2, Tranding3];
function TrandinNow() {
  return (
    
    <Box >
          <Heading
           textAlign={'center'}
              fontSize={"21px"}
              fontWeight={"700"}
              letterSpacing="4.2px"
              lineHeight={"23.94px"}
            mb='20px'
            mt={'20px'}
          >
              TRENDING NOW
          </Heading>
<VStack gap={'20px'}>
          <AnimatatedImage imageData={imageDataTranding}  />
          <Image _hover={{ cursor: "pointer" }} src={Hispanic}  />
          <Image src="https://n.nordstrommedia.com/id/5ec3d3de-9e8c-4317-bc28-3b42b503268e.png?h=17&w=1608" />
</VStack>
    
    </Box>
  )
}

export default TrandinNow