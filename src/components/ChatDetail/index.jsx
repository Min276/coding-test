import { Input } from "semantic-ui-react";
import { SlOptionsVertical } from "react-icons/sl";
import "./ChatDetail.css";
import { mockChatMessages } from "../../data/siteData";
import { useNavigate } from "react-router-dom";

const ChatDetail = () => {
  const navigate = useNavigate();
  const clickEventHandler = () => {
    navigate("/chats/123/profile");
  };
  return (
    <div className="chat-bar-column">
      <div className="chat-bar">
        <div
          className="flex align-items-center gap-6 cursor-pointer"
          onClick={clickEventHandler}
        >
          <img src="/icons/chat-list/boy.png" alt="chat-user" />
          <span className="user-name">John Doe</span>
        </div>
        <SlOptionsVertical fontSize={20} color="#E7E7E7" cursor="pointer" />
      </div>
      <div className="chat-body">
        {mockChatMessages.map((ones) => (
          <div key={ones.day}>
            {ones.day && (
              <div key={ones.day} className="divide-section">
                <h4 className="divider">{ones.day}</h4>
              </div>
            )}
            {ones.messages?.map((item, index) => (
              <div
                key={index}
                className={item.isRightAlign ? `right-chat` : `left-chat`}
              >
                <img
                  className="cursor-pointer"
                  src={item.senderImage}
                  alt="chat-user"
                  onClick={clickEventHandler}
                />
                <div className={item.isRightAlign ? `right-card` : ``}>
                  <div
                    className={item.isRightAlign ? `chat-align-right` : `chat`}
                  >
                    <span
                      className={
                        item.isRightAlign ? `chat-title-reverse` : `chat-title`
                      }
                    >
                      <h4
                        onClick={clickEventHandler}
                        className="cursor-pointer"
                      >
                        {item.sender}{" "}
                      </h4>{" "}
                      {item.time}{" "}
                    </span>
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="chat-area">
        <Input placeholder="Type your message here" />
        <div className="chat-box-detail">
          <div className="flex align-items-center gap-6">
            <img
              className="chat-icon"
              src="/icons/chat/icon1.png"
              alt="icon1"
            />
            <span className="type-icons">/</span>
            <span className="type-icons">#</span>
            <span className="type-icons">$</span>
            <span className="type-icons"> ~ </span>
            <span className="type-icons">^</span>
          </div>
          <div className="flex gap-8">
            <img
              className="chat-icons"
              src="/icons/chat/icon2.png"
              alt="icon2"
            />
            <img
              className="chat-icons"
              src="/icons/chat/icon3.png"
              alt="icon3"
            />
            <img
              className="chat-icons"
              src="/icons/chat/icon4.png"
              alt="icon4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
