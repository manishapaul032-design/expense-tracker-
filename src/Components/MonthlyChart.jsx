import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

 export const MonthlyChart = ({ expenses }) => {

  const monthlyDataObj = {};

  expenses.forEach(item => {
    const month = new Date(item.date).toLocaleString("default", { month: "short" });

    if (!monthlyDataObj[month]) {
      monthlyDataObj[month] = 0;
    }

    monthlyDataObj[month] += Number(item.amount);
  });

  const monthlyData = Object.keys(monthlyDataObj).map(key => ({
    name: key,
    amount: monthlyDataObj[key]
  }));

  const COLORS = ["red", "green", "blue", "orange", "purple"];

  return (
    <div>
      <h3>Monthly Chart</h3>

      {/* 🔵 Bar Chart */}
      <BarChart width={500} height={300} data={monthlyData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="blue" />
      </BarChart>

      {/* 🟣 Pie Chart */}
      <PieChart width={400} height={300}>
        <Pie data={monthlyData} dataKey="amount" outerRadius={100} label>
          {monthlyData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default MonthlyChart;