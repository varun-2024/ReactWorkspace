import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);
  console.log("Count Value after repaint in Return: ", count);
  let incCount = () => {
    setCount((currCount) => {
      console.log("First outer set currCount updated to:", currCount);
      setCount((secCount) => {
        console.log("Inside secCount before updated to:", secCount);
        return secCount + 1;
      });
      console.log("Inside currCount before return updated to:", currCount);
      return currCount + 1;
    });
    console.log("After setCount Count updated to:", count);
  };
  return (
    <>
      {console.log("Count Value before click in Return: ", count)}
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
      {console.log("Count Value after click in Return: ", count)}
    </>
  );
}
