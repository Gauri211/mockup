import { Flex,  
  SimpleGrid, GridItem, ChakraProvider, Box, } from '@chakra-ui/react'
import Section from './Components/Dashboard.jsx/ChartSection/Section'
import Sidebar from './Components/Dashboard.jsx/Sidebar'
import Profile from './Components/Dashboard.jsx/Profile'
import './App.css'
import Right from './Components/Dashboard.jsx/Grid3/Right'

const App = () => {
return (
<>
  <ChakraProvider>
    {/* <Flex flexDirection={["column-reverse", null, "row"]} className='font-style'> */}
      {/* <Flex zIndex={100} flex='5%'>
        <Box position={'fixed'}>
          <Sidebar />
        </Box>
      </Flex> */}
      {/* <Flex> */}
        <Sidebar />
      <Box ml={['0', null, '65px']} p={['0', null, '20px']}>
        <SimpleGrid columns={25} className='dashboard'>
            <GridItem colSpan={[1, null, 1]} position={'fixed'} left={0} zIndex={2}>
                <Sidebar />
            </GridItem>
            <GridItem colSpan={[24, null, 6]} >
                <Profile />
            </GridItem>
            <GridItem colSpan={[24, null, 12]}>
                <Section />
            </GridItem>
            <GridItem colSpan={[24, null, 6]}>
              <Right />
            </GridItem>
        </SimpleGrid>
      </Box>
      {/* </Flex> */}
    {/* </Flex> */}
  </ChakraProvider>
</>
)
}

export default App