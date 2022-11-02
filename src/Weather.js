import React, { useState } from "react";
import "./Weather.css";
import earthImage from "./earth.png";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: "Tues 31st Oct, 7.00",
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      currentConditions: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-engine">
          <input
            type="search"
            placeholder="Enter a City..."
            className="search-bar"
          />
          <input type="submit" value="Search" className="button" />
        </form>
        <div className="row">
          <img src={earthImage} alt="earth" className="earth-image"></img>
          <div className="col-6">
            <div className="city">
              <h1>{weatherData.city}</h1>
              <h2 className="text-capitalize">
                {weatherData.currentConditions}
              </h2>
              <div className="date">Last updated: {weatherData.date}</div>
            </div>
            <img
              src={weatherData.icon}
              width="80px"
              alt={weatherData.currentConditions}
              className="current-weather-icon"
            />
          </div>

          <div className="col-6">
            <ul className="current-conditions">
              <li className="current-temp">
                {Math.round(weatherData.temperature)}°C
              </li>
              <li className="current-humidity">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="current-wind-speed">
                Wind: {Math.round(weatherData.wind)} km/h
              </li>
            </ul>
          </div>
        </div>

        <div className="weekly-forecast">
          <div className="row">
            <div className="col">Monday</div>
            <div className="col">Tuesday</div>
            <div className="col">Wednesday</div>
            <div className="col">Thursday</div>
            <div className="col">Friday</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b6fdbb544a5ad3ta9845e350ff6o0437";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Glasgow&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
