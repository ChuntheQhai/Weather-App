import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.weatherData){
      console.log(this.props.weatherData);
      return (
        <div className="card-white weather-container">
          <p>Location : <span>{this.props.weatherData.name}</span></p>
          <p>Temperature : <span>{this.props.weatherData.main.temp}</span></p>
          <p>Humidity : <span>{this.props.weatherData.main.humidity}%</span></p>
          <p>Conditions : <span>{this.props.weatherData.weather.map((element) => element.description + " - ")}</span></p>
        </div> 
      );
    }
    else {
      return (
        <div className="card-white weather-container">
          <p>Location : <span></span></p>
          <p>Temperature : <span>27</span></p>
          <p>Humidity : <span>%</span></p>
          <p>Conditions : <span>Cloud</span></p>
        </div>
      );
    }
  }
}
export default Weather;