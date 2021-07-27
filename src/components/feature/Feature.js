import { ArrowUpwardOutlined } from "@material-ui/icons";
import React from "react";
import FeaturedChart from "../featuredChart/FeaturedChart";
import "./Feature.css";
const feature = () => {
  return (
    <div className="feature">
      <div className="featureItem ">
        <span className="featureAmount">7,461</span>
        <div className="d-flex">
          <div className="featureContent col-7 m-0 p-0">
            <p className="featureTitle">Orders</p>
            <div className="featureComment">
              <ArrowUpwardOutlined className="featureIcon" />
              <span className="featurePercent"> 25%</span>
              <span className="featureSub">since last week</span>
            </div>
          </div>
          <div className="featureChart col-5 m-0 p-0">
            <FeaturedChart color="#5F63F2"/>
          </div>
        </div>
      </div>
      <div className="featureItem ">
        <span className="featureAmount">7,461</span>
        <div className="d-flex">
          <div className="featureContent col-7 m-0 p-0">
            <p className="featureTitle">Orders</p>
            <div className="featureComment">
              <ArrowUpwardOutlined className="featureIcon" />
              <span className="featurePercent"> 25%</span>
              <span className="featureSub">since last week</span>
            </div>
          </div>
          <div className="featureChart col-5 m-0 p-0">
            <FeaturedChart color="#FF69A5"/>
          </div>
        </div>
      </div>
      <div className="featureItem ">
        <span className="featureAmount">7,461</span>
        <div className="d-flex">
          <div className="featureContent col-7 m-0 p-0">
            <p className="featureTitle">Orders</p>
            <div className="featureComment">
              <ArrowUpwardOutlined className="featureIcon" />
              <span className="featurePercent"> 25%</span>
              <span className="featureSub">since last week</span>
            </div>
          </div>
          <div className="featureChart col-5 m-0 p-0">
            <FeaturedChart color="#20C997"/>
          </div>
        </div>
      </div>
      <div className="featureItem ">
        <span className="featureAmount">7,461</span>
        <div className="d-flex">
          <div className="featureContent col-7 m-0 p-0">
            <p className="featureTitle">Orders</p>
            <div className="featureComment">
              <ArrowUpwardOutlined className="featureIcon" />
              <span className="featurePercent"> 25%</span>
              <span className="featureSub">since last week</span>
            </div>
          </div>
          <div className="featureChart col-5 m-0 p-0">
            <FeaturedChart color="#2C99FF"/>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default feature;
