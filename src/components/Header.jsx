import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import logo from "./images/logo.webp";
import { Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <img src={logo} alt="" className="header-logo" />
      </div>
      <div className="header-input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header-input-button"/>
      </div>

      <div className="header-icons">

      <VideoCallIcon className="header-icon" />
      <AppsIcon className="header-icon" />
      <Notifications className="header-icon" />
      <Avatar className="header-icon" alt="avatar" src={logo} />
      </div>
    </div>
  );
}

export default Header;
