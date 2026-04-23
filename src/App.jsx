import React,{useState} from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import "./App.css";


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    
  }
  return (
    <>
      <ExpenseForm addExpense={addExpense}/>
     <ExpenseTable expenses={expenses}/>
    </>
     
  )
}

export default App
