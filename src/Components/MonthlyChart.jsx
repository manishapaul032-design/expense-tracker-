import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

export const MonthlyChart = ({ expenses }) => {

  // 🟡 1. Filter last 30 days
  const today = new Date();
  const last30Days = new Date();
  last30Days.setDate(today.getDate() - 30);

  const filteredData = expenses.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= last30Days && itemDate <= today;
  });

  // 🟡 2. Group by date → separate income & expense
  const barDataObj = {};

  filteredData.forEach(item => {
    const day = new Date(item.date).toLocaleDateString();

    if (!barDataObj[day]) {
      barDataObj[day] = { name: day, income: 0, expense: 0 };
    }

    if (item.type === "income") {
      barDataObj[day].income += Number(item.amount);
    } else {
      barDataObj[day].expense += Number(item.amount);
    }
  });

  const barData = Object.values(barDataObj);

  // 🟡 3. Pie chart → only expenses grouped by category
  const pieDataObj = {};

  filteredData.forEach(item => {
    if (item.type === "expense") {
      if (!pieDataObj[item.category]) {
        pieDataObj[item.category] = 0;
      }
      pieDataObj[item.category] += Number(item.amount);
    }
  });

  const pieData = Object.keys(pieDataObj).map(key => ({
    name: key,
    value: pieDataObj[key]
  }));

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"];

  return (
    <div>
      <h3>Last 30 Days Overview</h3>

      {/* 🔵 Bar Chart (Income vs Expense) */}
      <BarChart width={600} height={300} data={barData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="green" />
        <Bar dataKey="expense" fill="red" />
      </BarChart>

      {/* 🟣 Pie Chart (Expenses Only) */}
      <PieChart width={400} height={300}>
        <Pie
          data={pieData}
          dataKey="value"
          outerRadius={100}
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default MonthlyChart;