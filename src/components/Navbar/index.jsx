import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavLinkData } from "../../data/siteData";

const NavItems = () => {
  return (
    <div className="nav-items">
      {NavLinkData.map((item) => (
        <div
          key={item.icon}
          className="nav-links"
          style={{ borderBottom: item.active && "3px solid #F4A933" }}
        >
          <Link key={item.icon} to={item.link} className="nav-icons">
            <img src={item.icon} alt="nav icons" />
          </Link>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-nav">
        <Link to="/" className="logo">
          <img src="/icons/nav/logo.png" alt="logo" />
          <span className="site-name">SGTR</span>
        </Link>
        <NavItems />
      </div>
      <div className="right-nav">
        <div className="noti-up">
          <Link to="/" className="noti">
            <img src="/icons/nav/noti.png" alt="noti" />
          </Link>
          <Link to="/" className="up-nav">
            <img src="/icons/nav/up.png" alt="up" />
            <span> +50</span>
          </Link>
        </div>
        <Link to="/" className="profile">
          <img
            src="/icons/nav/profile.png"
            className="profile-img"
            alt="profile"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
