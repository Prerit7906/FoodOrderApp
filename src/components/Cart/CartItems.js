import React from 'react'
import classes from './CartItems.module.css'

const CartItems = (props) => {
    const price=`$${props.item.price.toFixed(2)}`;
  return (
    <li className={classes['cart-item']}>
        <div >
            <h3>{props.item.name}</h3>
            <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>{props.item.amount}</span>
            </div>
        </div>
        <div className={classes.actions}>
            <button
             onClick={props.onRemove} 
             type='submit'>-</button>
            <button onClick={props.onAdd} type='submit'>+</button>
        </div>
    </li>
  )
}

export default CartItems