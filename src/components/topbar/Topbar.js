import React from "react";
import "./Topbar.css";
import flag from "../../images/flag.png"
import User from "../../images/User.png"
import logo from "../../images/Logo.png"
import {
  SortSharp,
  Settings,
  MailOutline,
  NotificationsNone,
  HelpOutline,
  Search,
} from "@material-ui/icons/";
import { Input, InputAdornment } from "@material-ui/core";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topBarLeft">
        <div className="leftIconContainer">
          <div className="leftIcon">
            <SortSharp />
          </div>
          <div className="icon">
            <img src={logo} alt="" />
          </div>
          {/* <div className="leftIcon">
            <div className="searchField">
              <Search />
              <input type="text" placeholder="Search.." />
            </div>
          </div> */}
        </div>
      </div>
      <div className="topBarRight">
        <div className="rightIconContainer">
          <div className="icon">
            
            <MailOutline />
            <span className="TopDot mail"></span>
          </div>
          <div className="icon">
          
            <NotificationsNone />
            <span className="TopDot notifications"></span>
          </div>
          <div className="icon">
            <Settings />
          </div>
          <div className="icon">
            <HelpOutline />
          </div>
          <div className="icon">
            <img src={flag} alt="" />
          </div>
          <div className="icon">
            <img src={User} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
