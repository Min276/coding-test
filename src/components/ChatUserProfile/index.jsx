import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ChatUserProfile.css";
import { FaPlus } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import ProfileTab from "./ProfileTab";
import Badges from "./Badges";
import { HighlightLinkData } from "../../data/siteData";

const ChatUserProfile = () => {
  return (
    <div className="chat-user-profile">
      <div className="flex flex-column align-items-center">
        <img
          className="profile-pic"
          src="/icons/chat-list/boy.png"
          alt="user"
        />
        <h3 className="user">John S.</h3>
        <Button>
          {" "}
          <FaPlus /> Follow
        </Button>
      </div>
      <div className="data-grid">
        {HighlightLinkData.map((item) => (
          <Link className="data-links" key={item.title} to={item.link}>
            <img src={item.icon} alt="link icons" />
            <span> {item.title}</span>
          </Link>
        ))}
      </div>
      <div className="note-parent">
        <BiSolidQuoteAltLeft fontSize={24} color="#F4A933" />
        <div className="note-box">
          <p>
            Lorem ipsum dolor sit amet consect adipisicing. hello hola blah blah
          </p>
        </div>
      </div>

      <ProfileTab />
      <Badges />
    </div>
  );
};

export default ChatUserProfile;
