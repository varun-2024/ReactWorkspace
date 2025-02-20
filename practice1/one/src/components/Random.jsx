function Random() {
  let Number = Math.random() * 100;
  return (
    <h1 style={{ "background-color": "#e3e3e3" }}>
      Random Number is :{Math.floor(Number)}{" "}
    </h1>
  );
}

export default Random;
