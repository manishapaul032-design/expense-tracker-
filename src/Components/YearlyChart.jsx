import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

 export const YearlyChart = ({ expenses }) => {

  const yearlyDataObj = {};

  expenses.forEach(item => {
    const year = new Date(item.date).getFullYear();

    if (!yearlyDataObj[year]) {
      yearlyDataObj[year] = 0;
    }

    yearlyDataObj[year] += Number(item.amount);
  });

  const yearlyData = Object.keys(yearlyDataObj).map(key => ({
    name: key,
    amount: yearlyDataObj[key]
  }));

  const COLORS = ["green", "red", "blue", "orange"];

  return (
    <div>
      <h3>Yearly Chart</h3>

      {/* 🔵 Bar */}
      <BarChart width={500} height={300} data={yearlyData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="green" />
      </BarChart>

      {/* 🟣 Pie */}
      <PieChart width={400} height={300}>
        <Pie data={yearlyData} dataKey="amount" outerRadius={100} label>
          {yearlyData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default YearlyChart;