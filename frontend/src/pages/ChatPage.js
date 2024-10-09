import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import '../App.css';


const Chatpage = () => {
      const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();

    return (
        <div style={{ width: "100%" }}>
            {user && <Box p="8px 10px"><SideDrawer/></Box>}
            <Box display="flex" justifyContent="space-between" w="100%" h="87vh" p="3px 10px" className="box">
            {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
            </Box>
        </div>
    );
};

export default Chatpage;
