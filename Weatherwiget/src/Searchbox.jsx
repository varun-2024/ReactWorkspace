import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
export default function Searchbox() {
  let API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
  let [city, setCity] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  };
  return (
    <>
      <div className="searchBox">
        <h1 className="">Weather App</h1>
        <h2 className="">Search City for Weather</h2>
        <form className="" action="" method="" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <br />
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
      </div>
    </>
  );
}
