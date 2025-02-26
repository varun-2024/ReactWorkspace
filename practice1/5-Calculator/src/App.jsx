import Display from "../components/Display";
import ButtonsContainer from "../components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalValue] = useState("");
  console.log("First \n ", calVal, setcalValue);
  const onButtonClick = (buttonText) => {
    console.log("Inside onButtonClick \n ", calVal, setcalValue);
    if (buttonText === "C") {
      console.log(
        "Inside onButtonClick- C Button Pressed \n ",
        calVal,
        setcalValue
      );
      setcalValue("");
    } else if (buttonText === "=") {
      console.log(
        "Inside onButtonClick- = Button Pressed for Result \n ",
        calVal,
        setcalValue
      );
      const result = eval(calVal);
      setcalValue(result);
    } else {
      console.log(
        "Inside onButtonClick- else all other button- Any Button Pressed \n ",
        calVal,
        setcalValue
      );
      const newDisplayValue = calVal + buttonText;
      setcalValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
