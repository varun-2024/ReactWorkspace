import "./App.css";
import Button from "@mui/material/Button";

function App() {
  let handleClick = () => {
    console.log("Button was Clicked!");
  };
  return (
    <>
      <h1 className="">Material UI Demo</h1>

      <Button variant="contained" size="small" onClick={handleClick}>
        Click Me
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
        color="success"
      >
        Click Me2
      </Button>
    </>
  );
}

export default App;
