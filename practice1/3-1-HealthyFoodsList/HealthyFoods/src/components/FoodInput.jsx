import styles from "./FoodInput.module.css";
function FoodInput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <input
        className={styles.FoodInput}
        type="text"
        placeholder="Enter food item here"
        onChange={handleOnChange}
      />
    </>
  );
}
export default FoodInput;
