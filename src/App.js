import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

/**
 * Components import
 */

import Headers from './components/Headers';
import FormElements from './components/FormElements';
import Weather from './components/Weather';


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Headers title="Weather Finder" subtitle="Find out the tempereature, weather conditions and more..." />
        <div className="container">
          <FormElements />
        </div>
      </div>
    );
  }
}

export default App;
