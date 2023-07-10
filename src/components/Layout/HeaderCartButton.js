import React from 'react'
import { useContext,useState,useEffect } from 'react'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
 const HeaderCartButton = (props) => {
  const ctx=useContext(CartContext);
  const totalAmount=ctx.items.reduce((currItem,item)=>{
    return currItem+item.amount;
  },0);
  const [isItemAChanges,setIsItemChanges]=useState(false);
  useEffect(() => {
    if(ctx.items.length===0){
      return ;
    }
    setIsItemChanges(true);
    const timeOut=setTimeout(() => {
      setIsItemChanges(false);
    }, 300);
    return () => {
      clearTimeout(timeOut);
    }
  }, [ctx.items])
  
  const buttonClass=`${classes.button} ${isItemAChanges ? classes.bump:''}`;
  return (
    <button className={buttonClass} onClick={props.clickHandler}>
        <span className={classes.icon}><CartIcon/></span>
        <span>My Cart</span>
        <span className={classes.badge}>{totalAmount}</span>
    </button>
  )
}
export default HeaderCartButton;
