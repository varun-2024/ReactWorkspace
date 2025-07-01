import "./App.css";
import Button from "@mui/material/Button";

function App() {
  let handleClick = () => {
    console.log("Button was Clicked!");
  };
  return (
    <>
      <h1 className="">Material UI Demo</h1>

      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>
      <Button variant="contained" onClick={handleClick} disabled>
        Click Me2
      </Button>
    </>
  );
}

export default App;
