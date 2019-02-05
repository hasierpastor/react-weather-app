import React, { Component } from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
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
