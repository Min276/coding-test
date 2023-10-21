import { Input } from "semantic-ui-react";
import { SlOptionsVertical } from "react-icons/sl";
import "./ChatDetail.css";
import messageData from "../../data/random-messages.json";
import { AccountData as profile } from "../../data/siteData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import moment from "moment-timezone";

const ChatDetail = () => {
  const navigate = useNavigate();
  const clickEventHandler = () => {
    navigate("/chats/123/profile");
  };

  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const userTimezone = moment.tz.guess();

  const LocalDateTimeZone = (data) =>
    moment.tz(data, "YYYY-MM-DDTHH:mm:ss ZZ", userTimezone);

  const TimeFormatFun = (data) => {
    const inputTime = data;
    const parsedTime = LocalDateTimeZone(inputTime);
    return parsedTime.format("h:mm A");
  };

  const DateFormatFun = (data) => {
    const inputDate = data;
    const parsedDate = LocalDateTimeZone(inputDate);
    return parsedDate.format("YYYY MMMM D");
  };

  const sortedData = messageData.sort((a, b) => {
    const parsedTimeA = DateFormatFun(a.time);
    const parsedTimeB = DateFormatFun(b.time);

    return moment(parsedTimeA, "YYYY MMMM D").isBefore(
      moment(parsedTimeB, "YYYY MMMM D")
    )
      ? -1
      : 1;
  });

  useEffect(() => {
    scrollToBottom();

    const addMessage = () => {
      if (currentIndex < sortedData.length) {
        setMessages([...messages, sortedData[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timeOutId = setTimeout(addMessage, 2000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [currentIndex, messages, sortedData]);

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
      <div className="chat-body" ref={containerRef}>
        {messages.map((item, index) => (
          <div key={item.recipientName + index}>
            <div className="divide-section">
              <h4 className="divider">{DateFormatFun(item.time)}</h4>
            </div>
            <div
              className={
                item.senderId === profile.id ? `right-chat` : `left-chat`
              }
            >
              <img
                className="cursor-pointer"
                src={item.senderImage}
                alt="chat-user"
                onClick={clickEventHandler}
              />
              <div className={item.senderId === profile.id ? `right-card` : ``}>
                <div
                  className={
                    item.senderId === profile.id ? `chat-align-right` : `chat`
                  }
                >
                  <span
                    className={
                      item.senderId === profile.id
                        ? `chat-title-reverse`
                        : `chat-title`
                    }
                  >
                    <h4 onClick={clickEventHandler} className="cursor-pointer">
                      {item.senderName}{" "}
                    </h4>{" "}
                    {TimeFormatFun(item.time)}{" "}
                  </span>
                  <p
                    className={item.senderId === profile.id ? `` : `text-left`}
                  >
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
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
