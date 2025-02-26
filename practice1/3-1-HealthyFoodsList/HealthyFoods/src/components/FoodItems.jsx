import PropTypes from "prop-types";
import Item from "./Item";
import { useState } from "react";

//let foodItems = [];
//Terinary Operator
/* let emptyMessage =
    foodItems.length === 0 ? (
      <h3 className="text-center">No Items Found...</h3>
    ) : null; */

/*   if (foodItems.length === 0) {
    return <h3 className="text-center">No Items Found</h3>;
  } */

function FoodItems({ items }) {
  let [activeItems, setactiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setactiveItems(newItems);
  };
  return (
    <ul className="">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        >
          {console.log(item)}
        </Item>
      ))}
    </ul>
  );
}
FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default FoodItems;
