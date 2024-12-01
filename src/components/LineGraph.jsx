import React, { useEffect, useState } from "react";
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
import { getAllData } from "../utils/apiHelper";
import { useSelector } from "react-redux";

const LineGraph = () => {
  const [lineData, setLineData] = useState(null);
  const storedata = useSelector((state) => state.dashboard);

  useEffect(() => {
    const data = storedata?.dashboardData?.widgets?.[3];
    setLineData(data);
  }, [storedata]);

  return (
    <section className="w-fit h-fit">
      <h1 className="">{lineData?.title}</h1>
      <ResponsiveContainer width={500} height={300}>
        <LineChart
          width={500}
          height={300}
          data={lineData ? lineData?.data : null}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "#242424" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LineGraph;
