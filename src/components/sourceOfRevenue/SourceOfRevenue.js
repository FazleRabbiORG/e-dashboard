import React from "react";
import SourceChart from "../sourceChart/SourceChart";
import "./SourceOfRevenue.css";

const SourceOfRevenue = () => {
  return (
    <div className="sourceOfRevenue">
      <div className="sourceOfRevenueHeader">
        <span className="sourceHeader">Source of revenue generated</span>
        {/* <hr /> */}
        <div className="sourceTable">
          <table class="table">
            <tbody>
              <tr>
                <td>Visitors</td>
                <td>Name of source</td>
                <td>Page view</td>
                <td>Revenue</td>
                <td>trend</td>
              </tr>
            </tbody>
            <tbody >
              <tr>
                <td>Google</td>
                <td>23,397</td>
                <td>12,201</td>
                <td>$5,536</td>
                <td><SourceChart color="#5f63f2"/></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>23,397</td>
                <td>12,201</td>
                <td>$5,536</td>
                <td><SourceChart color="#ff69a5"/></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>23,397</td>
                <td>12,201</td>
                <td>$5,536</td>
                <td><SourceChart color="#20c997"/></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>23,397</td>
                <td>12,201</td>
                <td>$5,536</td>
                <td><SourceChart color="#2c99ff"/></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>23,397</td>
                <td>12,201</td>
                <td>$5,536</td>
                <td><SourceChart color="#fa8b0c"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SourceOfRevenue;
