import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./Card";
function Drinks() {
  const [drinks, setDrinks] = useState([]);

  // Fetch drinks when a drink type is selected
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
      .then((response) => {
        setDrinks(response.data.drinks || []);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-wrap">
      {drinks.map((drink) => (
        <Card name={drink.strDrink} img={drink.strDrinkThumb}></Card>
      ))}
    </div>
  );
}

export default Drinks;
