import PropTypes from "prop-types";
import styles from "../Item.module.css";
// Two Ways to define styles from Module CSS Files
function Item({ foodItem }) {
  return (
    <>
      {/*  <li className={`${styles.item} list-group-item text-cyan-400`}>
        {foodItem}
      </li> */}
      <li className={`${styles["kg-item"]} list-group-item text-cyan-400`}>
        {foodItem}
      </li>
    </>
  );
}
Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
};

export default Item;
