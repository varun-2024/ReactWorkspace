import Searchbox from "./Searchbox.jsx";
import Infobox from "./Infobox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    humidity: "",
    feelslike: "",
    weather: "",
  });
  return (
    <>
      <Searchbox setWeatherInfo={setWeatherInfo} />
      <Infobox weatherData={weatherInfo} />
    </>
  );
}
