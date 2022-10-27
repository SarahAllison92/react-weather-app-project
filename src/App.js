import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/SarahAllison92/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
        </footer>
      </div>
    </div>
  );
}
