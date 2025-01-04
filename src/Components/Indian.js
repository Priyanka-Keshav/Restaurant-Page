import React, { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useState } from "react";
import { useContext } from "react";
import { cuisine } from "./Context";

function Indian() {
  const { selectedCuisine } = useContext(cuisine);

  useEffect(() => {
    if (selectedCuisine) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCuisine}`
        )
        .then((response) => {
          setMenu(response.data.meals);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCuisine]);
  const [menu, setMenu] = useState([]);
  return (
    <>
      {" "}
      <div className="flex flex-wrap">
        {menu.map((m) => (
          <Card name={m.strMeal} img={m.strMealThumb}></Card>
        ))}
      </div>
    </>
  );
}

export default Indian;
