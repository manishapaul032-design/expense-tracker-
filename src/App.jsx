import React,{useState} from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import {MonthlyChart} from './Components/MonthlyChart';
import {YearlyChart} from './Components/YearlyChart';

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
     <MonthlyChart expenses={expenses} />
     {/* <YearlyChart expenses={expenses} /> */}
    
    </>
     
  )
}

export default App
