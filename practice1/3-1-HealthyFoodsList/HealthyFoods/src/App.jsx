import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
//import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  //console.log(`Current Value of textState : ${textToShow}`);
  /* const onKeyDown = (event) => {
    setTextState(event.target.value);
    console.log(setTextState);
  }; */
  //console.log(`Food Items ${foodItems} Set Food items${setFoodItems}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      if (
        event.target.value.toLowerCase() === "butter" ||
        event.target.value.toLowerCase() === "ghee" ||
        event.target.value.toLowerCase() === "ice cream"
      ) {
        alert("This is not a Healthy Choice");
        return;
      }
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food Value Entered is : " + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
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
