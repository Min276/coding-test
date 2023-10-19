import { Fragment } from "react";
import "./ChatUserProfile.css";
import { BadgeData } from "../../data/siteData";

const Badges = () => {
  return (
    <Fragment>
      <h4 className="badge-title">Badges</h4>
      <div className="flex align-items-center gap-6">
        {BadgeData.map((item) => (
          <div key={item.title} className="flex align-items-center gap-6">
            <span> | </span>
            <img src={item.icon} alt={item.title} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Badges;
