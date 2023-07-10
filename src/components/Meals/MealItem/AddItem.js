import React, { useState } from 'react'
import classes from './AddItem.module.css'

const AddItem = (props) => {
  const[amount,setAmount]=useState(1);
  const amountChangeHandler=(event)=>{
    setAmount(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(amount<1 || amount>5){
      return ;
    }
    const amountInNumber=+amount;
    props.addToCartHandler(amountInNumber);
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.input}>
        <label htmlFor='amount'>Amount</label>
        <input 
        onChange={amountChangeHandler}
        value={amount} 
        id='amount'
        type='number'  
        min='1' 
        max='5'
        ></input>
        </div>
        <button type='submit'>+Add</button>
    </form>
  )
}

export default AddItem