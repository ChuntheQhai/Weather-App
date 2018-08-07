import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import Weather from './Weather';
import axios from 'axios';

class FormElements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      country: '',
      err: undefined,
      name: undefined,
      temp: undefined,
      humidity: undefined,
      weather: [] 
    }
  }

  getWeather = async () => {
    if (this.state.city !== '' && this.state.country !== '') {
      const API_KEY = 'a01a9731324022549287423357ba8b68';
      try {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}`);
        const data = await api_call.json();
        this.setState({
          name: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          weather: data.weather
        })
      } 
      catch(err){
        alert('Input must be a valid city or country');
        this.setState({
          err: err.message
        })
      }
      
    }
    else {
      alert('Input should not be empty');
    }
  }

  handleChangeCity = (e) => {
    let cityname = e.target.value;
    this.setState(() => ({
      city: cityname
    }))
  }
  handleChangeCountry = (e) => {
    let countryname = e.target.value;
    this.setState(() => ({
      country: countryname
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="card-white form-container">
          <Form onSubmit={this.getWeather}>
            <Input
              size="large"
              className="input input-city"
              icon='home'
              iconPosition='left'
              placeholder='Enter city...'
              onChange={(e) => this.handleChangeCity(e)}
            />
            <Input
              size="large"
              className="input input-country"
              icon='world'
              iconPosition='left'
              placeholder='Enter country...'
              onChange={(e) => this.handleChangeCountry(e)}
            />
            <br />
            <Button animated="fade"
              className="button button-find"
              color="red"
              type="submit"
              fluid>
              <Button.Content visible>Find Weather</Button.Content>
              <Button.Content hidden>Send Locations</Button.Content>
            </Button>
          </Form>
        </div>
        <Weather
          name={this.state.name}
          humidity={this.state.humidity} 
          temp={this.state.temp}
          weather={this.state.weather} />
      </div>
    )
  }
}
export default FormElements;