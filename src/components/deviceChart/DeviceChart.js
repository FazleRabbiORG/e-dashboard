import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const DeviceChart = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  return (
    <div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={0}
          endAngle={180}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8" 
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DeviceChart;
