import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Searchbox({ setWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      console.log(data);
      let result = {
        city,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      setWeatherInfo(newInfo);
      setError(false);
      /* getWeatherInfo().then((data) => {
      setWeatherInfo(data);
    }); */
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(true);
    }
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
          {error && (
            <p style={{ color: "red" }}>
              Error fetching weather data. Please try again.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
