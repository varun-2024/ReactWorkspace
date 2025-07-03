import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Infobox({ weatherData }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="infoBox">
        <h1 className="">Weather Info- {weatherData.weather} </h1>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherData.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature: {weatherData.temp}°C
              <br />
              Min: {weatherData.temp_min}°C
              <br />
              Max: {weatherData.temp_max}°C
              <br />
              Humidity: {weatherData.humidity}%
              <br />
              Feels Like: {weatherData.feelslike}°C
              <br />
              Weather: {weatherData.weather}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
