import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import WeatherForm from './WeatherForm';

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {
  constructor(props) {
    super(props);
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  getWeatherData(city) {
    let url = `${baseURL}${city}&AAPID=${API_KEY}`;
    let data = fetch(url)
      .then(resp => resp.json())
      .then(text => console.log(data));
  }

  render() {
    return (
      <div>
        <Header />
        <WeatherForm getWeatherData={this.getWeatherData} />
      </div>
    );
  }
}

export default App;
