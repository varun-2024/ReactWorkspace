import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
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
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/*  <Container>
        <p>
          This is Awesome. I like this. You use this to make cards, can include
          like share subscribe components in this.
        </p>
      </Container> */}
    </>
  );
}

export default App;
