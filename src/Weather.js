import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData ({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 8:18",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
              <input type="submit" value="Submit" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <div>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit"> °F</span>
          </div>
          <div  className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    const apiKey = "3fd0b2514fdddeb5a1773faa623df844";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}