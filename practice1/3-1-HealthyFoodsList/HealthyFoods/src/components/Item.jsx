import PropTypes from "prop-types";
import styles from "../Item.module.css";
// Two Ways to define styles from Module CSS Files
function Item({ foodItem }) {
  return (
    <div className={styles.buttonContainer}>
      {/*  <li className={`${styles.item} list-group-item text-cyan-400`}>
        {foodItem}
      </li> */}
      <li className={`${styles["kg-item"]}`}>
        <span>{foodItem}</span>
        <button type="button" className={styles.button}>
          Buy
        </button>
      </li>
    </div>
  );
}
Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
};

export default Item;
