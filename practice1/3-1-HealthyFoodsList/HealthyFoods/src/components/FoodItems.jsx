import PropTypes from "prop-types";
import Item from "./Item";

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
  return (
    <ul className="">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}
FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default FoodItems;
