import React from 'react';

function WeatherData(props) {
  return (
    <div>
      <p>Weather: {props.weather}</p>
      <p>Temperature: {props.temp}</p>
      <p>Humidity: {props.humidity}</p>
      <p>Wind: {props.wind}</p>
    </div>
  );
}

export default WeatherData;
