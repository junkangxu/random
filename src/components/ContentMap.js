import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import SimpleMap from './SimpleMap';
import { getRandomInRange } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

import './ContentMap.css';

const type = "Map";
const title = type;
const fixed = 5;
const maxLatitude = 90;
const maxLongitude = 180;
const minLatitude = -90;
const minLongitude = -180;

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
        <ContentHeader title={title} />
        <ActionButton func={this.getResult} />
        <div className="resultDiv">
          <h6>
          Latitude: {this.state.center[0]}
          &nbsp;&nbsp;
          Longitude: {this.state.center[1]}
          </h6>
          <div className="mapDiv">
            <SimpleMap center={this.state.center} zoom={1} />
          </div>
        </div>
      </div>
    );
  }
}
