import React from "react";
import "./sidebar.css";
import {
  AppsOutlined,
  BarChartOutlined,
  CalendarTodayOutlined,
  ChatBubbleOutlineOutlined,
  DashboardOutlined,
  DynamicFeedOutlined,
  EmailOutlined,
  FileCopyOutlined,
  InboxOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  TableChartOutlined,
  AddCircleOutlineOutlined,
  MapOutlined,
  KeyboardArrowRight,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="mainManu">
          <h6 className="title">MAIN MANU</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <DashboardOutlined className="manuItemIcon" />
              Dashboard
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem active">
            <span className="sidebarLeft">
              <EmailOutlined className="manuItemIcon " />
              Email
            </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <ChatBubbleOutlineOutlined className="manuItemIcon" />
              Chat
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <ShoppingCartOutlined className="manuItemIcon" />
              eCommerce
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <CalendarTodayOutlined className="manuItemIcon" />
              Calender
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <InboxOutlined className="manuItemIcon" />
              Layout
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <PersonOutlineOutlined className="manuItemIcon" />
              Profile
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <FileCopyOutlined className="manuItemIcon" />
              Page
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
          </ul>
        </div>
        
        <div className="components">
          <h6 className="title">COMPONENTS</h6>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <DynamicFeedOutlined className="manuItemIcon" />
              UI Elements
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <AppsOutlined className="manuItemIcon " />
              Icons
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <BarChartOutlined className="manuItemIcon" />
              Charts
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem ">
              <span className="sidebarLeft">
                <TableChartOutlined className="manuItemIcon" />
                Table
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
              
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <AddCircleOutlineOutlined className="manuItemIcon" />
              Forms
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
            <li className="sidebarListItem">
              <span className="sidebarLeft">
              <MapOutlined className="manuItemIcon" />
              Map
              </span>
              <KeyboardArrowRight className="manuItemIcon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
