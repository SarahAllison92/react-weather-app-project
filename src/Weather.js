import React from "react";
import "./Weather.css";
import earthImage from "./earth.png";

export default function Weather() {
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
            <h1>Lisbon</h1>
            <h2>Clear Sky</h2>
          </div>
          <img
            src="https://www.pngfind.com/pngs/m/254-2542632_partially-covering-png-icon-moon-and-sun-icon.png"
            width="80px"
            alt="sun"
            className="current-weather-icon"
          />
        </div>

        <div className="col-6">
          <ul className="current-conditions">
            <li className="current-temp">20°C</li>
            <li className="current-humidity">Humidity</li>
            <li className="current-wind-speed">Wind</li>
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
}
