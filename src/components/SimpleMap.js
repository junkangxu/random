import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default class SimpleMap extends Component {
  
  render() {
    return (
      <GoogleMapReact
        center={this.props.center}
        zoom={this.props.zoom}
      >
      </GoogleMapReact>
    );
  }
}
