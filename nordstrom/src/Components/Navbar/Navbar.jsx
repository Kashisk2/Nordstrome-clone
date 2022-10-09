import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Spacer, Stack, VStack } from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
 
import styles from "./navbarSignUp.module.css"
export default function Navbar() {
    return <>
        <VStack width={'95%'} m={'auto'} mt={'25px'} backgroundColor={'transparent'}>
            <Flex justifyContent={"space-between"} width={'100%'} mb={'15px'}>
                <Box>
                    <Image w={'198px'} h={'30px'} src='https://i.imgur.com/ubtddUO.png' />
                </Box>
                <Box>
                    <Stack spacing={4}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input _focus={{border:"1px solid black",boxShadow:"none"}} borderRadius={'0px'} border={"1px solid #bbb"} height={'45px'} width={'655px'} type='text' placeholder='Search for products and brands' />
                        </InputGroup>


                    </Stack>
                </Box>
                <Box>

               <Box className={styles.dropdown} float={'right'}>

                    <Button className={styles.dropbtn} p={'0px'} backgroundColor={'transparent'} _hover={{backgroundColor:'transparent'}} color={'#515151'} _focus={{backgroundColor:'transparent'}} fontSize={'16px'} fontWeight={'400'} >
                      Sign up
                    </Button><ChevronDownIcon ml={'5px'}/>
                    <Box boxShadow={'lg'} className={styles.dropdownContent}>
                      
                      <Link>Kashi</Link>
                    </Box>
                   

                </Box>
                </Box>
            </Flex>
            <Box width={'100%'} h={'0.4px'} backgroundColor={'gray.300'}>

            </Box>
            <Flex w={'100%'} justifyContent={'space-between'}>

                <Menu>
                    <MenuButton _hover={{borderBottom:"2px solid black"}} height={'26px'} border={'2px solid transparent'} color={'rgb(51,51,51)'} lineHeight={'22.5px'}>Open menu</MenuButton>
                    <Portal width={ '1400px'}>
                        
                        <MenuList border={'none'}  width='1400px'>
                            <Flex width={'80%'}  m={'auto'} justifyContent={'space-between'} >
                            <Box fontWeight={'800'}>

                            
                            
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                            </Box>
                             <Box>

                            <MenuItem>Menu 1</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                            </Box>
                            </Flex>
                        </MenuList>
                          
                    </Portal>
                    
                </Menu>
                <Button fontWeight={'400'} fontSize={'16px'} backgroundColor={'transparent'} _hover={{ backgroundColor: "trasparent" }}>Holyday Gift</Button>
                <Menu>
                    <MenuButton color={'rgb(51,51,51)'} lineHeight={'22.5px'}>Open menu</MenuButton>
                    <Portal>
                        <MenuList>
                            <MenuItem>Menu 1</MenuItem>
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
                
        
            </Flex>
        </VStack>

    </>
}