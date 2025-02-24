import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
//import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegitables",
    "Roti",
    "Salad",
    "Milk",
    "Fruits",
  ];
  return (
    <React.Fragment>
      <h1 className="text-center food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
