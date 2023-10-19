import { Fragment } from "react";
import ChatDetail from "../../components/ChatDetail";
import ChatList from "../../components/ChatList";
import ChatUserProfile from "../../components/ChatUserProfile";
import Navbar from "../../components/Navbar";
import { isMobile, isTablet } from "react-device-detect";

const Chat = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex w-full">
        {isTablet ? (
          <>
            <ChatList />
            <ChatDetail />
          </>
        ) : isMobile ? (
          <ChatList />
        ) : (
          <>
            <ChatList />
            <ChatDetail />
            <ChatUserProfile />
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Chat;
