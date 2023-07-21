// import { Box, IconButton, Icon, VStack, Flex } from '@chakra-ui/react';
import { AddIcon, ChatIcon, CheckCircleIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons'
// // import Profile from './Grid1/Profile';

// const Sidebar = () => {
//   return (
//     <Flex p={4} flexDirection={["row", null, "column"]} alignItems="center">
//       <VStack spacing={4}>
//         <IconButton aria-label="Home" icon={'Logo'} bgColor={'#342e12'}/>
//         <IconButton aria-label="Home" icon={<SearchIcon />} bgColor={'white'} color={'gray.400'}/>
//         <IconButton aria-label="Home" icon={<AddIcon />} bgColor={'#3f00ff'} color={'white'}/>
//         <IconButton aria-label="User" icon={<ChatIcon />} bgColor={'white'} color={'gray.400'}/>
//         <IconButton aria-label="Logout" icon={<SettingsIcon/>} bgColor={'white'} color={'gray.400'} />
//       </VStack>
//     </Flex>
//   );
// };

// export default Sidebar;
// SideToolbar.js
import React from 'react';
import { Box, VStack, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  return (
    <Box
      w="70px"
      p="4"
      display={['none', null, 'fixed']}
      flexDirection="column"
      // justifyContent="center"
      // alignItems="center"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      color="white"
    >
      <VStack spacing="4">
          <IconButton aria-label="Home" icon={'Logo'} bgColor={'#342e12'}/>
         <IconButton aria-label="Home" icon={<SearchIcon />} bgColor={'white'} color={'gray.400'}/>
         <IconButton aria-label="Home" icon={<AddIcon />} bgColor={'#3f00ff'} color={'white'}/>
         <IconButton aria-label="User" icon={<ChatIcon />} bgColor={'white'} color={'gray.400'}/>
         <IconButton aria-label="Logout" icon={<SettingsIcon/>} bgColor={'white'} color={'gray.400'} />

      </VStack>
    </Box>
  );
};

export default Sidebar;
