import { Fragment } from "react";
import ChatDetail from "../../components/ChatDetail";
import ChatList from "../../components/ChatList";
import ChatUserProfile from "../../components/ChatUserProfile";
import Navbar from "../../components/Navbar";

const Chat = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="column left">
          <ChatList />
        </div>
        <div className="column center">
          <ChatDetail />
        </div>
        <div className="column right">
          <ChatUserProfile />
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
