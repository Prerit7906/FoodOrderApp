import React,{useReducer} from 'react'
import CartContext from './cart-context';
const defaultState={
  items:[],
  totalAmount:0
}
const cartReducer=(state,action)=>{
  if(action.type==='add'){
    const totalAmount=state.totalAmount+action.item.price*action.item.amount;
    const itemIndex=state.items.findIndex(//returns index of element if found based on the condition else returns -1
      (item)=> item.id===action.item.id //returns true if the condition is statisfied else false
      );
    let updatedItems;
    if(itemIndex!==-1){
      const updatedItem={
        ...state.items[itemIndex],
        amount:action.item.amount+state.items[itemIndex].amount
      }
      updatedItems=[...state.items]
      updatedItems[itemIndex]=updatedItem;
    }
    else{
      updatedItems=state.items.concat(action.item);
    }
    return{
      items:updatedItems,
      totalAmount:totalAmount
    }
  }
  if(action.type==='remove'){
    const indexToRemove=state.items.findIndex(item=>
      item.id===action.id
    );
    const itemToBeRemoved=state.items[indexToRemove];
    const totalAmount=state.totalAmount-itemToBeRemoved.price;
    let updatedItems;
    if(itemToBeRemoved.amount===1){
       updatedItems=state.items.filter(item=>{
        return action.id!==item.id;
      })
    }
    else {
      const updatedItem={
        ...itemToBeRemoved,
        amount:itemToBeRemoved.amount-1
      }
      updatedItems=[...state.items];
      updatedItems[indexToRemove]=updatedItem;
    }
    // const updatedState=removeElement(action.id,state.items);
    return {
      items:updatedItems,
      totalAmount:totalAmount
    }
  }
}
const CartContextProvider = (props) => {
  const [cartDetails,dispatchCartDetails]=useReducer(cartReducer,defaultState);
  const addItemToCartHandler=item=>{
    dispatchCartDetails({type:'add',item:item});
  }
  const removeItemToCartHandler=id=>{
    dispatchCartDetails({type:'remove',id:id});
  }
  const cartContext={
    items:cartDetails.items,
    totalAmount:cartDetails.totalAmount,
    addItem:addItemToCartHandler,
    removeItem:removeItemToCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;