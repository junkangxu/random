import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import './RadioSelect.css';

const RadioSelect = (props) => (
  <div className="radioSelect">
    <RadioButtonGroup
      name="shipSpeed"
      defaultSelected={props.default}
      onChange={props.func}
    >
      {props.arr.map((data) =>
        <RadioButton className="radioUnit" value={data.value} label={data.label} />)}
    </RadioButtonGroup>
  </div>
);

export default RadioSelect;
