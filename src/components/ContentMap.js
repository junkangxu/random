import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import SimpleMap from './SimpleMap';
import { getRandomInRange } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentMap.css';

const type = "Map";
const fixed = 5;
const maxLatitude = 90;
const maxLongitude = 180;
const minLatitude = -90;
const minLongitude = -180;

const ApiKey = "AIzaSyCzh__hj0x5ywWnMZTHDv02i_PgSZ1B9mw";

export default class ContentMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      center: [null, null],
    }
  }

  getResult = (event) => {
    let newLatitude = getRandomInRange(minLatitude, maxLatitude, fixed);
    let newLongitude = getRandomInRange(minLongitude, maxLongitude, fixed);
    this.setState({center: [newLatitude, newLongitude]});
    let resultStr = newLatitude  + " " +  newLongitude;
    addToLocalStorage(type, resultStr);
  };

  render() {
    return (
      <div className="contentDiv">
        <div className="header">
          <h3>地图</h3>
          <Divider />
        </div>
        <div className="buttonDiv">
          <RaisedButton
            label="GET"
            primary={true}
            onClick={this.getResult}
          />
        </div>
        <div className="resultDiv">
          <h3>
          Latitude: {this.state.center[0]}
          <br />
          Longitude: {this.state.center[1]}
          </h3>
          <div className="mapDiv">
            <SimpleMap center={this.state.center} zoom={1} />
          </div>
        </div>
      </div>
    );
  }
}
