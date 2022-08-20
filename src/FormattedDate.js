import React from "react";

export default function FormattedDate (props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let amOrPm = "";
  if (hours < 12) {amOrPm = " AM";}
  else if (hours >= 12) {amOrPm = " PM"};

  if (hours > 12) {hours = hours - 12;}
  else if (hours === 0) {hours = "12";};

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}{amOrPm}
    </div>
  );
}