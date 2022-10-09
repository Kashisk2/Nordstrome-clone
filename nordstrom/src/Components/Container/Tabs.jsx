import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
function TabsAll() {
    return (
        <Tabs colorScheme={'black'} width={'55%'}>

            <TabList   >
                <Flex  width="100%"  justifyContent={'space-around'}>

                <Tab width={'25%'} _active={{backgroundColor:"transparent"}} borderBottom={'4px solid'} fontSize={'19px'} lineHeight={'26.6px'}>Women</Tab>
                <Tab width={'25%'} _active={{backgroundColor:"transparent"}} borderBottom={'4px solid'}  fontSize={'19px'} lineHeight={'26.6px'}>Men</Tab>
                <Tab width={'25%'} _active={{backgroundColor:"transparent"}} borderBottom={'4px solid'}  fontSize={'19px'} lineHeight={'26.6px'}>Kids</Tab>
                </Flex>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabsAll