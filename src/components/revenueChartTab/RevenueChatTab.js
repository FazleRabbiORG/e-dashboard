import React from "react";
import "./revenueCharTab.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const RevenueChatTab = () => {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="RevenueChatTab">
      <Paper>
        <Tabs
          
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={handleChange}
        >
          <Tab className="chartTabItem" label="Today" />
          <Tab className="chartTabItem" label="Week" />
          <Tab className="chartTabItem" label="Month" />
          <Tab className="chartTabItem" label="Year" />
        </Tabs>
      </Paper>
    </div>
  );
};

export default RevenueChatTab;
