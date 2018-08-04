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
      data: undefined
    }
  }

  getWeather = async () => {
    if (this.state.city !== '' && this.state.country !== '') {
      const API_KEY = 'a01a9731324022549287423357ba8b68';

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`);
      const data = await api_call.json();

      this.setState({
        data
      })
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
        <Weather weatherData={this.state.data} />
      </div>
    )
  }
}
export default FormElements;