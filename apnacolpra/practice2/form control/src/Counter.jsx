import { useState, useEffect } from "react";
export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let incCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let decCountx = () => {
    setCountx((currCount) => currCount - 1);
  };
  let incCounty = () => {
    setCounty((currCount) => currCount + 1);
  };
  let decCounty = () => {
    setCounty((currCount) => currCount - 1);
  };
  useEffect(() => {
    console.log("Counter Updated");
  }, []);
  return (
    <>
      <h3 className="">Counter</h3>
      <h4>X: {countx}</h4>
      <h4>Y: {county}</h4>
      <button onClick={incCountx}>X Increment+1</button>
      <button onClick={decCountx}>X Decrement-1</button>
      <button onClick={incCounty}>Y Increment+1</button>
      <button onClick={decCounty}>Y Decrement-1</button>
    </>
  );
}
