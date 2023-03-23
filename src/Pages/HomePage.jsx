import { Box, Center, ChakraProvider, extendTheme, Grid, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import Header from "../Components/Navbar/Header";
import Navbar from "../Components/Navbar/Navbar";
import FirstImageDiv from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import { SignUpConetexProvide, SignUpContex } from "../Contex/SignupContex";
import { useEffect, useState } from "react";
import { useContext } from "react";
const breakpoints = {
    sm: '320px',
    headrefont:'660px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const theme = extendTheme({
    fonts: {
        heading: `Brandon Text,Arial,sans-serif`,
        body: `Brandon Text,Arial,sans-serif`,
    },

    breakpoints
   
});


export default function HomePage(){
    const[loading,setLoading]=useState(true)
    // const { userLogin }=useContext(SignUpContex)
useEffect(()=>{

    setTimeout(() => {
        setLoading(false)
    }, 2000)
    
}, [])

   if(loading){

       return <ChakraProvider theme={theme}>
    
       <Box padding='6' boxShadow='lg' bg='white'>
               <Box padding='6' boxShadow='lg' bg='white'>
                   <SkeletonCircle size='10' />
                   <SkeletonText mt='4' noOfLines={7} spacing='4' />
               </Box>
               <Grid templateColumns='repeat(5,1fr)' mt={'30px'} gap='20px'>
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />
                   <Skeleton   height='300px' />


               </Grid>
       </Box>
       </ChakraProvider>
   } 
   
   return (
        <ChakraProvider theme={theme}>
           
        <Box>
            <ScrollToTop
                smooth={"true"}
                viewBox={"0 0 30 30"}
                component={
                    <Box>
                        <Center>
                            <RiArrowUpSLine size={"20px"} width={"400"} />
                        </Center>
                        <Text color={"#393939"} fontSize={"13px"}>
                            Top
                        </Text>
                    </Box>
                }
            />


            <Header />

            <Navbar />
            <FirstImageDiv />
            <Footer />
        </Box>
             
        </ChakraProvider>
    )
}