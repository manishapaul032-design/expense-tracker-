import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    type: "expense",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    addExpense(formData);

    setFormData({
      type: "expense",
      category: "",
      amount: "",
      date: ""
    });
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <form>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select><br />

        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="salary">Salary</option>
          <option value="other">Other</option>
        </select><br />

        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
        /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        /><br />

        <button type="submit" onClick={onClickHandler}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;