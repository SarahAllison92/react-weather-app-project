import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weatherForecast">
      <div className="weather-forecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={48} />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-temp-max">{maxTemp()}</span>/
        <span className="weather-forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
