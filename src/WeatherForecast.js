import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast (props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "3fd0b2514fdddeb5a1773faa623df844";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">
            Tue
          </div> 
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-max">86° </span>
            <span className="WeatherForecast-min">64°</span>
          </div>
        </div>
      </div>
    </div>
  )

}