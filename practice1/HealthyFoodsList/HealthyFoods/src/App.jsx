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
  return (
    <React.Fragment>
      <h1 className="text-center">Healthy Foods</h1>
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
