import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>Lisbon</h1>
          <h2>Clear Sky</h2>
          <img src="../images/earth.png" alt="earth drawing" />
        </div>

        <div className="col-6">
          <ul className="current-conditions">
            <li>20°C</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
