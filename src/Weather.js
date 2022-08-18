import React from "react";
import "./Weather.css";

export default function Weather () {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Search for a city" className="city-search"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/> 
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <div>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Clear with periodic clouds"/> 
            77°C
          </div>
          <div>
            <ul>
              <li>Humidity: 60%</li>
              <li>Wind: 0 mph</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wednesday 8:18</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}