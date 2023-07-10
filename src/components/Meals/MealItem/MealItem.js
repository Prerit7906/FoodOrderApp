import React from 'react'
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './Mealitem.module.css'
import AddItem from './AddItem';
const MealItem = (props) => {
  const ctx=useContext(CartContext);
    const price=`$${props.meal.price}`;
    const addToCartHandler=amount=>{
      ctx.addItem({
        id:props.meal.id,
        name:props.meal.name,
        amount:amount,
        price:props.meal.price
      })

      // console.log(ctx.items);
    }
  return (
    <li className={classes.meal}>
    <div >
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
        <AddItem addToCartHandler={addToCartHandler}/> 
    </div>
    </li>
  )
}

export default MealItem