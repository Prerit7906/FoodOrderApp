import React from 'react'
import classes from './MealsList.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      amount:0,
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      amount:0,
      description: 'A german specialty!',
      price: 16.50,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      amount:0,
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      amount:0,
      description: 'Healthy...and green...',
      price: 18.99,
    }
  ];
const MealsList
 = () => {
    const mealslist=DUMMY_MEALS.map(meal=> <MealItem key={meal.id} meal={meal}/>);
  return (
    <div className={classes.meals}>
        <Card>
        <ul>
            {mealslist}
        </ul>
        </Card>
    </div>
  )
}

export default MealsList
