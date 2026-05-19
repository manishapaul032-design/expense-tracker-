import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    type: "",
    category: "",
    amount: "",
    date: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const onClickHandler = (e) => {
    e.preventDefault();


    const oldExpenses =
      JSON.parse(localStorage.getItem("expenses")) ;

  
    const updatedExpenses = [...oldExpenses, formData];


    localStorage.setItem(
      "expenses",
      JSON.stringify(updatedExpenses)
    );


    addExpense(formData);


    setFormData({
      type: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <form onSubmit={onClickHandler}>
        
     
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <br />

      
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="salary">Salary</option>
          <option value="other">Other</option>
        </select>

        <br />

        <input type="number" name="amount" placeholder="Enter amount" value={formData.amount} onChange={handleChange }/>

        <br />

        <input type="date" name="date" value={formData.date}  onChange={handleChange}/>

        <br />

        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default ExpenseForm;