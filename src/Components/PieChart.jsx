import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const ExpenseChart = ({ expenses }) => {

  const totalIncome = expenses
    .filter(item => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = expenses
    .filter(item => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense }
  ];

  const COLORS = ["green", "red"];

  return (
    <div>
      <h3>Expense Chart</h3>

      <PieChart width={500} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpenseChart;