import React from "react";
import "./Weather.css";

export default function Weather () {
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
      <h1>Kansas City</h1>
      <div>
        <ul>
          <li>Wednesday 8:18</li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Clear with periodic clouds"/>
          <span className="temperature">77</span><span className="unit"> °F</span>
        </div>
        <div  className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 0 mph</li>
          </ul>
        </div>
      </div>
    </div>
  )
}