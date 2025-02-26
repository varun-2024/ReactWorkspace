import styles from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <div className={styles.calculator}>
      <input
        type="text"
        id="display"
        name="name"
        placeholder=""
        className={styles.display}
        value={displayValue}
        readOnly
      />
    </div>
  );
}

export default Display;
