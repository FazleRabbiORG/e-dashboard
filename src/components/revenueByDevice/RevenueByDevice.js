import React from "react";
import "./RevenueByDevice.css";
import DeviceChart from "../deviceChart/DeviceChart";

const RevenueByDevice = () => {
  return (
    <div className="revenueByDevice bg-white p-3">
      <div className="deviceHeader">
        <span>Revenue By Device</span>
      </div>
      <div className="device">
        <DeviceChart />
      </div>
      <div className="deviceTable">
        <table class="table borderLess">
          <tr>
            <td> <span className="deviceDot desktop"></span>Desktop</td>
            <td>  %4,870</td>
            <td>75%</td>
          </tr>
          <tr>
            <td><span className="deviceDot mobile"></span>Mobile</td>
            <td>%4,483</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>  <span className="deviceDot tablets"></span>Tablets</td>
            <td>%2,420</td>
            <td>25%</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RevenueByDevice;
