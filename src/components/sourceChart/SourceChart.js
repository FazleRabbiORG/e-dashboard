import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const SourceChart = (props) => {
  const data = [
    {
      name: "Page A",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page d",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page d",
      uv: 900,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page d",
      uv: 100,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page d",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },

  ];

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={7 / 1}>
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="uv" dot={false} stroke={props.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SourceChart;
