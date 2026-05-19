import React,{useState,useEffect} from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import MonthlyChart from './Components/MonthlyChart'



import "./App.css";


const App = () => {
  const [expenses, setExpenses] = useState([]);
   useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);


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
