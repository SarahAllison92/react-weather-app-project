import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="row">
        <div className="col">
          <div className="city">
            <h1>{props.data.city}</h1>
            <h2 className="text-capitalize">{props.data.currentConditions}</h2>
            <div className="date">
              Last updated:
              <div className="formatted-date">
                <FormattedDate date={props.data.date} />
              </div>
            </div>
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>

        <div className="col">
          <div className="current-conditions">
            <div className="current-temp">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
            <div className="current-humidity">
              Humidity: {props.data.humidity}%
            </div>
            <div className="current-wind-speed">
              Wind: {Math.round(props.data.wind)} km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
