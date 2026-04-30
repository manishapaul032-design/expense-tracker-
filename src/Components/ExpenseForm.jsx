
import React,{useState} from 'react'

const ExpenseForm = ({addExpense}) => {
    const [formData, setFormData] = useState();



   const handleChange =(e)=>{
      setFormData(e.target.value);
  }
  const onClickHandler =(e)=>{
        e.preventDefault();
        const expense ={
          type: "",
          category: "",
          amount: "",
          date: ""
        }
        addExpense(expense)
       
  }

  return (
    <div className='container'>
      <h1>Expense Tracker</h1>

       <form >
      
      {/* Type Dropdown */}
      <select name="type" onChange={handleChange} >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select><br></br>

      {/* Category Dropdown */}
      <select name="category" onChange={handleChange} >
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills</option>
        <option value="salary">Salary</option>
        <option value="other">Other</option>
      </select><br></br>

 

   
      <input type="number" name="amount" placeholder="Enter amount" onChange={handleChange} /><br></br>

      <input type="date" name="date"  onChange={handleChange} /><br></br>

      <button type="submit" onClick={onClickHandler}>Add Transaction</button>
    </form>
    </div>
  )
 
}

export default ExpenseForm
