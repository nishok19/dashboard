import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";

const BarGraph = () => {
  const [barData, setBarData] = useState(null);
  const storedata = useSelector((state) => state?.dashboard);

  useEffect(() => {
    const data = storedata?.dashboardData?.widgets?.[5];
    setBarData(data);
  }, [storedata]);

  return (
    <section className="w-fit">
      <h1 className="">{barData?.title}</h1>
      <BarChart
        width={500}
        height={300}
        data={barData ? barData?.data : null}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="product" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: "#242424" }} />
        <Legend className="w-0 left-0" />
        <Bar dataKey="unitsSold" fill="#8884d8" />
      </BarChart>
    </section>
  );
};

export default BarGraph;
