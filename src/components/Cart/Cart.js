import React, { useContext,useEffect } from 'react'
import CartContext from '../../store/cart-context.js';
import CartItems from './CartItems.js';
import Modal from '../UI/Modal.js';
import classes from './Cart.module.css'

const Cart = (props) => {
  const removeItemHandler = (id) => {
    ctx.removeItem(id);
  }
  const addItemHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  }
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItems
          key={item.id}
          item={item}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler=()=>{
    console.log("List of ordered items:");
    console.log(ctx.items);
  }
  return (
    <Modal OnCloseButton={props.OnCloseButton}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.OnCloseButton} className={classes['button--alt']}>Close</button>
        {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart