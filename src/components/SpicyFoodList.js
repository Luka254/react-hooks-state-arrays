import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods(prevVal => [...prevVal, newFood])

  }
  function handleClick(id) {
    setFoods(prevVal => {
      // prevVal.filter(food => food.id !== id)
      let newArr = prevVal.map(food => {
        if (food.id === id) {
          return { ...food, heatLevel: food.heatLevel + 1 }
        }
        else {
          return food;
        }
      });
      return newArr;
    })
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
