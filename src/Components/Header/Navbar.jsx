import React, { useEffect, useRef } from "react";
import "./Navbar.css";

import logo from "../../assets/Image/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current?.classList.add("nav-dark");
      } else {
        navRef.current?.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
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
