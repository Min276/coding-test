import { Search, Button } from "semantic-ui-react";
import { FaAngleDown } from "react-icons/fa";
import "./ChatList.css";
import { SlOptionsVertical } from "react-icons/sl";
import { MockChatList } from "../../data/siteData";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const navigate = useNavigate();
  const clickEventHandler = (id) => {
    navigate(`/chats/${id}`);
  };
  return (
    <div className="chat-list-column">
      <Search
        input={{ icon: "search", iconPosition: "left" }}
        placeholder="Search here"
      />
      <div className="main-chat-list">
        {MockChatList.map((item, index) => (
          <div
            className="chat-list"
            key={index}
            onClick={() => clickEventHandler(item.id)}
          >
            <div className="flex align-items-center gap-2">
              <div className="flex flex-column align-items-center gap-2">
                <img src={item.pointIcon} alt="point icon" />
                <span>{item.pointStatus}</span>
              </div>
              <img
                className="user-profile"
                src={item.profile}
                alt="chat-users"
              />
            </div>
            <div className="flex flex-column gap-1">
              <div className="flex gap-4">
                <span className="title">{item.name}</span>
                <span className="time">{item.time}</span>
              </div>
              <div className="flex align-items-center gap-6">
                <div>
                  <img
                    src={item.upIcon}
                    alt="up"
                    style={{ display: !item.isMinus && "none" }}
                  />
                  <span> {item.currentPoints}</span>
                </div>
                <div className="flex gap-2">
                  {item.icons.map((icon) => (
                    <img
                      key={icon}
                      className="four-icons"
                      src={icon}
                      alt="icons"
                    />
                  ))}
                </div>
              </div>
              <p>{item.chatDescription}</p>
            </div>
            {index === 2 && (
              <div>
                <SlOptionsVertical
                  fontSize={20}
                  color="#E7E7E7"
                  cursor="pointer"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-content-center">
        <Button secondary className="view-more">
          View More <FaAngleDown fontSize={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatList;
