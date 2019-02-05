import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import WeatherForm from './WeatherForm';

const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <WeatherForm />
      </div>
    );
  }
}

export default App;
