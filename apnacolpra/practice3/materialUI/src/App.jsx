import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function App() {
  let handleClick = () => {
    console.log("Button was Clicked!");
  };
  return (
    <>
      <h1 className="">Material UI Demo</h1>

      <Button
        variant="contained"
        size="small"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Click Me
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={handleClick}
        color="success"
        endIcon={<SendIcon />}
      >
        Click Me2
      </Button>
    </>
  );
}

export default App;
