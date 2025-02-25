import styles from "./Buttons.module.css";
function Buttons() {
  return (
    <>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
    </>
  );
}
export default Buttons;
