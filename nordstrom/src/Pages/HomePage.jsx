import { Box, Center, ChakraProvider, extendTheme, Text } from "@chakra-ui/react";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import Header from "../Components/Navbar/Header";
import Navbar from "../Components/Navbar/Navbar";
import FirstImageDiv from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
const theme = extendTheme({
    fonts: {
        heading: `Brandon Text,Arial,sans-serif`,
        body: `Brandon Text,Arial,sans-serif`,
    },
});
export default function HomePage(){
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