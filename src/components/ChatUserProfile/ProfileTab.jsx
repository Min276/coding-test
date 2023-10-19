import { Tab } from "semantic-ui-react";
import "./ChatUserProfile.css";
import { TabData } from "../../data/siteData";

const panes = [
  {
    menuItem: "Profile",
    render: () => (
      <div className="profile-cards">
        {TabData.map((item) => (
          <div className="up-card" key={item.title}>
            <img src={item.icon} alt="icon" />
            <span className="icon-title">{item.title}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    menuItem: "About Me",
    render: () => <span>Hello there. This is Min Khant.</span>,
  },
];

const ProfileTab = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default ProfileTab;
