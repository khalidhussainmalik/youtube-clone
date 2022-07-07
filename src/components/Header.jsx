import React, { useState } from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import logo from "./images/logo.webp";
import avatar from "./images/khalid.jpg";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/">
          <img src={logo} alt="" className="header-logo" />
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-input-button" />
        </Link>
      </div>

      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar className="header-icon" alt="avatar" src={avatar} />
      </div>
    </div>
  );
}

export default Header;
