import React from "react";
import "./topbar.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import PersonPinIcon from '@material-ui/icons/PersonPin'

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topLeft">
          <span className="logo">
           <img src="https://yt3.ggpht.com/ytc/AKedOLS60kH-0JxdQbtKQuJ2zhL2ME91sWnVOwI2m50N=s48-c-k-c0x00ffffff-no-rj" alt="" style={{fontSize:150}} />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <NotificationsIcon />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
          <ChatIcon />
          <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <PersonPinIcon /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
