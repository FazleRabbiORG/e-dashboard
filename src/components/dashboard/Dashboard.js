import React, { useState } from "react";
import "./dashboard.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import { AddOutlined, ShareOutlined } from "@material-ui/icons";
import Feature from "../feature/Feature";
import RevenueChart from "../revenueChart/RevenueChart";
import SourceOfRevenue from "../sourceOfRevenue/SourceOfRevenue";
import SellingProduct from "../sellingProduct/SellingProduct";
import RevenueByDevice from "../revenueByDevice/RevenueByDevice";
import ByLocations from "../byLocation/ByLocations";

const Dashboard = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  return (
    <div className="dashboard">
      <div className="dashboardHeader p-3">
        <h6 className="dashboardTitle">Ecommerce Dashboard</h6>
        <div className="HeaderContent">
          <div className="DateRangePicker">
            <DateRangePicker onChange={onChange} value={value} />
          </div>
          <p className="headerItem">
            <ArrowDownwardOutlinedIcon className="headerIcon" /> Export
          </p>
          <p className="headerItem">
            <ShareOutlined className="headerIcon" /> Share
          </p>
          <p style={{backgroundColor:'#5F63F2',color:'white'}} className="headerItem ">
            <AddOutlined className="headerIcon " /> Add New
          </p>
        </div>
      </div>
      <div className="">
        <Feature />
        <div className="d-flex ">
          <div className="col-md-6">
            <RevenueChart className="col-md-6" />
          </div>
          <div className="col-md-6">
            <SourceOfRevenue className="col-md-6" />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="sellingProduct col-md-4">
          <SellingProduct />
        </div>
        <div className="sellByLocation col-md-4">
          <ByLocations/>
        </div>
        <div className="PieChart col-md-4">
          <RevenueByDevice />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
