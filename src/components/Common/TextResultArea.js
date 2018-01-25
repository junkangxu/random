import React from 'react';

import './TextResultArea.css';

const TextResultArea = (props) => (
  <div className="textResultDiv">
    {props.result}
  </div>
);

export default TextResultArea;
