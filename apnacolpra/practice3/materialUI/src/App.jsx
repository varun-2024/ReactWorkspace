import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function App() {
  let handleClick = () => {
    console.log("Button was Clicked!");
  };
  const [open, setOpen] = useState(true);

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

      <Alert
        variant="outlined"
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        onClose={() => {}}
      >
        <AlertTitle>Success</AlertTitle>
        Here is a gentle confirmation that your action was successful.
      </Alert>

      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Click the close icon to see the Collapse transition in action!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    </>
  );
}

export default App;
