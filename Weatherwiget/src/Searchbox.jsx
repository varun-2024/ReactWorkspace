import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
export default function Searchbox() {
  return (
    <>
      <h1 className="">Weather App</h1>
      <h2 className="">Search City for Weather</h2>
      <form className="" action="" method="">
        <TextField id="city" label="City Name" variant="outlined" required />
        <br />
        <Button
          size="large"
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Search
        </Button>
      </form>
    </>
  );
}
