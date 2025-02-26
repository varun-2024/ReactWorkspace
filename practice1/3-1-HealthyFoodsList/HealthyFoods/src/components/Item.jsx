import PropTypes from "prop-types";
import styles from "../Item.module.css";

// Two Ways to define styles from Module CSS Files
function Item({ foodItem, bought, handleBuyButton }) {
  return (
    <div className={styles.buttonContainer}>
      <li className={`${styles["kg-item"]} ${bought && styles.active}`}>
        <span>{foodItem}</span>
        <button
          onClick={handleBuyButton}
          type="button"
          className={styles.button}
        >
          Buy
        </button>
      </li>
    </div>
  );
}

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
  handleBuyButton: PropTypes.func.isRequired,
};

export default Item;
