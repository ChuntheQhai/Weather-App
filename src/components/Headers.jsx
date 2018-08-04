import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Headers = (props) => {
  return (
    <div className="header-container">
      <Header className="header" as='h2' icon textAlign="center">
        <Icon name="sun" className="weather-icon sun" />
        {props.title}
        <Icon name="cloud" className="weather-icon cloud" />
        <Header.Subheader>{props.subtitle}</Header.Subheader>
      </Header>
    </div>
  )
}
export default Headers;
