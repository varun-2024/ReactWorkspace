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
    <ul className="list-group text-center">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
