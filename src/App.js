import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/cartContextProvider";
function App() {
  const [isCartShown,setIsCartShown]= useState(false);
  // const [CartState,setCartState]=useState({id:'',name:'',price:0,amount:0});

  const OnClickButton=()=>{
    setIsCartShown(true);
  };
  const OnCloseButton=()=>{
    setIsCartShown(false);
  };
  
  return (
    <CartContextProvider >
      {isCartShown && <Cart OnCloseButton={OnCloseButton}/> }
      <Header clickHandler={OnClickButton}/>
      <Meals/>
    </CartContextProvider>
  );
}

export default App;
