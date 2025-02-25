import styles from "./Display.module.css";
function Display() {
  return (
    <div className={styles.calculator}>
      <input
        type="text"
        id="display"
        name="name"
        placeholder=""
        className={styles.display}
      />
    </div>
  );
}

export default Display;
