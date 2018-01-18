import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const ApiKey = "AIzaSyCzh__hj0x5ywWnMZTHDv02i_PgSZ1B9mw";

export default class SimpleMap extends Component {

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: ApiKey}}
        center={this.props.center}
        zoom={this.props.zoom}
      >
      </GoogleMapReact>
    );
  }
}
