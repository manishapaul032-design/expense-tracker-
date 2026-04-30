import React from 'react'

const ExpenseTable = ({expenses}) => {
  console.log(expenses);
  
  return (
    <div>
       <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
         
          <th>Type</th>
          <th>Category</th>
          <th>Amount (₹)</th>
           <th>Date</th>
        </tr>
      </thead>
        <tbody>
        {expenses.map((expense, index) => (
          <tr>
           
            <td>{expense.type}</td>
             <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
          </tr>
        ))}
      </tbody>
</table>
    </div>
  )
}

export default ExpenseTable
