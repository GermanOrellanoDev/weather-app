import { useState } from "react";

export const WeatherApp = () => {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.openweathermap.org/data/2.5/weather";

  //hacer hook
  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(`${url}?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(`Ocurrio el siguiente error `, error);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    city.length > 0 && fetchWeather();
  };

  return (
    <div>
      <h1>Weahter App</h1>
      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          className="row g-4 needs-validation"
          noValidate
        >
          <div className="col-12">
            <label htmlFor="validationCustom03" className="form-label">
              Enter the City
            </label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
              className="form-control"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid city</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      {/* agregar animación si isLoading == true */}
      {isLoading ? (
        <p></p>
      ) : (
        weatherData && (
          <div className="card-container">
            <div className="card">
              <h2>{weatherData.name}</h2>
              <p className="temp-description">
                Temp: {parseInt(weatherData?.main?.temp - 273.15)}°C
              </p>
              <h3>Weather Condition</h3>
              <p className="weather-description">
                {weatherData.weather[0].description}
              </p>
              <img
                className="weather-icon"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt=""
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};
