import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span>
          <span className="unit"> {Math.round(props.celsius)}</span>
          <span className="active-unit">°C</span>
          <a href="/" onClick={showFahrenheit} className="unactive-unit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <span>
          <span className="unit">{Math.round(fahrenheit())}</span>

          <span className="active-unit">°F</span>
          <a href="/" onClick={showCelcius} className="unactive-unit">
            °C
          </a>
        </span>
      </div>
    );
  }
}
