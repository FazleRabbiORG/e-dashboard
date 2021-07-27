import React from "react";
import "./Revenue.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  CartesianAxis,
} from "recharts";
import RevenueChatTab from "../revenueChartTab/RevenueChatTab";

const RevenueChart = () => {
  const data = [
    {
      name: "Jan",
      previousPeriod: 40,
      currentPeriod: 20,
    },
    {
      name: "Feb",
      previousPeriod: 30,
      currentPeriod: 40,
    },
    {
      name: "Mar",
      previousPeriod: 20,
      currentPeriod: 30,
    },
    {
      name: "Apr",
      previousPeriod: 20,
      currentPeriod: 60,
    },
    {
      name: "May",
      previousPeriod: 35,
      currentPeriod: 30,
    },
    {
      name: "Jun",
      previousPeriod: 45,
      currentPeriod: 75,
    },
    {
      name: "July",
      previousPeriod: 60,
      currentPeriod: 35,
    },
    {
      name: "Aug",
      previousPeriod: 30,
      currentPeriod: 48,
    },
    {
      name: "Sep",
      previousPeriod: 20,
      currentPeriod: 30,
    },
    {
      name: "Oct",
      previousPeriod: 32,
      currentPeriod: 75,
    },
    {
      name: "Nov",
      previousPeriod: 45,
      currentPeriod: 24,
    },
    {
      name: "Dec",
      previousPeriod: 57,
      currentPeriod: 60,
    },
  ];

  return (
    <div className="revenueChart">
      <div className="chartHeader">
        <span className="charTitle">Total Revenue</span>
        <div className="chartHeaderContent">
          {/* <RevenueChatTab/> */}
          {/* <span>Today</span>
          <span>Week</span>
          <span>Month</span>
          <span>Year</span> */}
        </div>
      </div>
      <hr />
      <div className="revenueFeatured d-flex ml-3">
        <div className="ml-3">
          <span className="h3">$72,784</span>
          <div className="">
            <span className="deviceDot mobile"></span> Current Period
          </div>
        </div>
        <div className="ml-3">
          <span className="h3">$72,784</span>
          <div className="">
            <span className="deviceDot desktop"></span> previous Period
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart data={data}>
          {/* <CartesianGrid strokeDashArray="4 1 2"/> */}
          {/* <CartesianAxis/> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="currentPeriod"
            stroke="#8884d8"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="previousPeriod" stroke="#20c997" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
