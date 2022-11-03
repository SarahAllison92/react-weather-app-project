import React from "react";
import earthImage from "./earth.png";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="weather-info">
        <div className="row">
          <img src={earthImage} alt="earth" className="earth-image"></img>
          <div className="col">
            <div className="city">
              <h1>{props.data.city}</h1>
              <h2 className="text-capitalize">
                {props.data.currentConditions}
              </h2>
              <div className="date">
                Last updated:
                <div className="formatted-date">
                  <FormattedDate date={props.data.date} />
                </div>
              </div>
              <img
                src={props.data.icon}
                width="100px"
                alt={props.data.currentConditions}
                className="current-weather-icon"
              />
            </div>
          </div>

          <div className="col">
            <ul className="current-conditions">
              <li className="current-temp">
                {Math.round(props.data.temperature)}°C
              </li>
              <li className="current-humidity">
                Humidity: {props.data.humidity}%
              </li>
              <li className="current-wind-speed">
                Wind: {Math.round(props.data.wind)} km/h
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
    </div>
  );
}
