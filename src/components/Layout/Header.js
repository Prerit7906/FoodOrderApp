import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton'
const Navbar = (props) => {
  return (
    <>
    <header className={classes.header}>
    <h2>MishraMeals</h2>
    <HeaderCartButton clickHandler={props.clickHandler}/>
    </header>
    <div className={classes['main-image']}>
    <img src={mealsImage} alt='Food' />
    </div>
 </>
  )
}
export default Navbar;
