import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Box,
  Flex,
  Image,
  Stack,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { BiToggleLeft } from "react-icons/bi";
import { useRef } from "react";
import { MotionConfig } from "framer-motion";
import styles from "./Navbar.module.css";
import Holyday from "./Holyday";
import Sale from "./Sale";
function NavbarTab() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef("0px");
  const handleToggle = () => {
    setToggle(!toggle);

    ref.current = "300px";
    console.log(ref.current);
  };
  //   return (
  // <Menu>
  //         <MenuButton
  //           _hover={{ borderBottom: "2px solid black" }}
  //           height={"26px"}
  //           border={"2px solid transparent"}
  //           color={"rgb(51,51,51)"}
  //           lineHeight={"22.5px"}
  //         >
  //           Open menu
  //         </MenuButton>
  //         <Portal>
  //           <Box  >
  //             <MenuList
  //               boxShadow="lg"
  //               border={"none"}

  //               p={"20px"}
  //             >
  //               <Flex

  //                 m={"auto"}
  //                 justifyContent={"space-between"}
  //               >
  //                 <Box transition={ 'height 0.3s ease'}  width={'100%'} >
  //                   {/* <Image width={"100%"} src= /> */}
  //                   <Footer/>
  //                 </Box>
  //               </Flex>
  //             </MenuList>
  //           </Box>
  //         </Portal>
  //       </Menu>
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1080px',
    xl: '1200px',
    '2xl': '1536px',
  }
  //   )
  return (
     <Box w={"90%"} mt={'500px'}   display={'flex'} flexWrap={['wrap']} justifyContent={"space-between"} color={'#333333'}>
            

         
           
         
       
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
         HolyDay Gifts
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          color={' rgb(214, 31, 39)'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid  rgb(214, 31, 39)",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        Sale
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Sale />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        Women
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        Men
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
       Kids
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        Young Adult
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        
Activewear
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
         Home
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
        Beauty
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
      Designer
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
    <Box className={styles.menuDropDown}>
      <Box>
        <Button
          backgroundColor={"transparent"}
          borderBottom="2px solid transparent"
          borderRadius={'none'}
          fontWeight={'400'}
          _focus={{backgroundColor:'none'}}
          _hover={{
            cursor: "pointer",
            borderBottom: "2px solid black",
            transition: " border-color 300ms",
            touchAction: "manipulation",
          }}
        >
   
The Thread
        </Button>

        <ul className={styles.submenu}>
          <Box>
            <Holyday />
          </Box>
        </ul>
      </Box>
      
    </Box>
     </Box>
  );
}

export default NavbarTab;
