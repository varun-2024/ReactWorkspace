import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Searchbox() {
  let [city, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  let getWeatherInfo = async () => {
    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
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
