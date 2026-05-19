import React from "react";

const ExpenseTable = ({ expenses }) => {
  return (
    <div>
      <h2>Transaction History</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>₹ {item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;