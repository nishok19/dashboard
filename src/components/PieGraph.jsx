import React, { useEffect, useState } from "react";
import {
  PieChart,
  Tooltip,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getAllData } from "../utils/apiHelper";
import { useSelector } from "react-redux";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF8072"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieGraph = () => {
  const [pieData, setPieData] = useState(null);
  const storedata = useSelector((state) => state.dashboard);

  useEffect(() => {
    const data = storedata?.dashboardData?.widgets?.[4];
    setPieData(data);
  }, [storedata]);

  return (
    <section className="h-[320px]">
      <h1>{pieData?.title}</h1>
      <ResponsiveContainer width={630} height={300}>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData && pieData?.data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData?.data?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                // fill={COLORS[index % COLORS.length]}
                fill={COLORS[index % entry?.value]}
              />
            ))}
          </Pie>
          <Tooltip
            itemStyle={{ color: "white" }}
            contentStyle={{ backgroundColor: "#242424" }}
          />
          {/* <Legend content={renderLegend} data={pieData && pieData?.data} /> */}
          <Legend
            payload={pieData?.data?.map((item, index) => ({
              id: item.category,
              type: "square",
              value: `${item.category} (${item.value}%)`,
              color: COLORS[index % item?.value],
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default PieGraph;
