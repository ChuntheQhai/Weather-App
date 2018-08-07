import React, { Component } from 'react';

class Weather extends Component {
  constructor(props){
    super(props)
  }
  render() {
    if(this.props.humidity !== undefined){
      console.log(this.props);
      return (
        <div className="card-white weather-container">
          <p>Location : <span>{this.props.name}</span></p>
          <p>Temperature : <span>{this.props.temp - 273}</span></p>
          <p>Humidity : <span>{this.props.humidity}%</span></p>
          <p>Conditions : <span>{this.props.weather.map((element) => element.description + " ")}</span></p>
        </div> 
      );
    }
    else {
      return(
        <div>
        </div>
      )
    }
  }
}
export default Weather;