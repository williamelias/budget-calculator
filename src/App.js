import React,{useState} from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";

import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id:uuidv4(),charge:"rent",amount:1},
  {id:uuidv4(),charge:"car payment",amount:10},
  {id:uuidv4(),charge:"credit card bill",amount:44}
]

function App() {
  //*********************** state values **********************
  // all expenses, add expense
  const [expenses,setExpenses] = useState(initialExpenses)
  //single expense
  const [charge,setCharge] = useState('')
  //single amount
  const [amount,setAmount] = useState('')
  //*********************** functionality **********************

  const handleCharge = e =>{
    setCharge(e.target.value)
  }
  const handleAmount = e =>{
    setAmount(e.target.value)
  }
  // alert
  const [alert,setAlert] = useState({show:false})

  const handleSubmit = e =>{
    e.preventDefault();
    
    if (charge !== '' && amount > 0){
      const sigleExpense = {id:uuidv4(),charge:charge,amount:amount}
      const toChangeExpenses = expenses.map((x)=>x)
      setExpenses([...toChangeExpenses,sigleExpense])
      
      handleAlert({type:'success',text: 'Item added succesfully'})
      setAmount("")
      setCharge("")
    }
    else{
      handleAlert({type:'danger',text: "charge cant't be empty value and amount has to be bigger than zero"})
    }
  }
  const cleanAll = ()=>{
    setExpenses([])
  }
  const handleAlert = ({type,text})=>{
    setAlert({show:true,type,text})
    setTimeout(()=>{
      setAlert({show:false})
    },3000)
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm
          amount={amount} charge={charge}
          handleAmount={handleAmount} handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} cleanAll={cleanAll}></ExpenseList>

      </main>
      <h1>
        Total spending: <span className="total">
          $ {expenses.reduce((acc,curr)=> {
            return acc += parseInt(curr.amount)
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
