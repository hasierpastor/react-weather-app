import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ city: evt.target.value });
  }

  handleSubmit(evt) {
    this.props.getWeatherData(this.state.city);
    this.setState({ city: '' });
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default WeatherForm;
