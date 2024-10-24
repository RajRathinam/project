import React from 'react'
import {Container,Box,Text,Tabs,TabPanel,Tab,TabList,TabPanels} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW='xl' centerContent>
  <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="8px 0 8px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
         ChatsApp
        </Text>
      </Box>
<Box bg="white" w="100%" p={4} borderRadius="lg" color={"black"} borderWidth="1px">
<Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
</Box>
    </Container>
  )
}

export default HomePage
