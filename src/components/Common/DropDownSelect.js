import React from 'react';
import SelectField from 'material-ui/SelectField';

import './DropDownSelect.css';

export default class DropDownSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  handleSelectChange = (event, index, value) => {
    this.props.func(event, index, value);
    this.setState({selected: value});
  };

  render() {
    return (
      <div className="dropDownSelect">
        <SelectField
          value={this.state.selected}
          onChange={this.handleSelectChange}
          floatingLabelText={this.props.text}
        >
          {this.props.items}
        </SelectField>
      </div>
    );
  }
}
