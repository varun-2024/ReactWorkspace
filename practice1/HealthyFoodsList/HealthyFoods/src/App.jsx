import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegitables",
    "Roti",
    "Salad",
    "Milk",
    "Fruits",
  ];
  //let foodItems = [];
  //Terinary Operator
  /* let emptyMessage =
    foodItems.length === 0 ? (
      <h3 className="text-center">No Items Found...</h3>
    ) : null; */

  /*   if (foodItems.length === 0) {
    return <h3 className="text-center">No Items Found</h3>;
  } */
  return (
    <React.Fragment>
      <h1 className="text-center">Healthy Foods</h1>
      {/* Using Logical Operator for Above Statement */}
      {foodItems.length === 0 && (
        <h3 className="text-center">No Items Found...</h3>
      )}
      <ul className="list-group text-center">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
