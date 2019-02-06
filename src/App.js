import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import WeatherForm from './WeatherForm';
import WeatherData from './WeatherData';

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      temp: '',
      humidity: '',
      wind: ''
    };
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  async getWeatherData(city) {
    let url = `${baseURL}${city}&APPID=${API_KEY}`;
    let data = await fetch(url);
    let response = await data.json();
    this.setState({
      weather: response.weather[0].description,
      temp: response.main.temp,
      humidity: response.main.humidity,
      wind: response.wind.speed
    });
  }

  render() {
    return (
      <div>
        <Header />
        <WeatherForm getWeatherData={this.getWeatherData} />
        <WeatherData
          weather={this.state.weather}
          temp={this.state.temp}
          humidity={this.state.humidity}
          wind={this.state.wind}
        />
      </div>
    );
  }
}

export default App;
