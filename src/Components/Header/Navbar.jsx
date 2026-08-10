import React from 'react'
import "./Navbar.css";
import logo from "../../assets/Image/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browe By Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="icon">
            <SearchIcon />
          </li>
          <li>Children</li>
          <li className="icon">
            <NotificationsActiveIcon />
          </li>
          <li className="profile">
            <AccountCircleIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
          <li className="dropdown">
            <p>Sign out of Netflix</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
