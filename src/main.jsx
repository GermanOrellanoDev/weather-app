import React from "react";
import ReactDOM from "react-dom/client";
import { WeatherApp } from "./WeatherApp";
import "./styles/weatherStyles.css";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherApp />
    <Footer />
  </React.StrictMode>
);
