import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './ActionButton.css';

const ActionButton = (props) => (
  <div className="actionButton">
    <RaisedButton
      label="GET"
      primary={true}
      onClick={props.func}
    />
  </div>
);

export default ActionButton;
