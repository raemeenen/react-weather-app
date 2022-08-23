import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <ul>
        <li><FormattedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} size={50} />
          <WeatherTemperature fahrenheit={props.data.temperature} /> 
        </div>
        <div  className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  )
}