import React from 'react';
import ContentHeader from './Common/ContentHeader';
import ActionButton from './Common/ActionButton';
import TextResultArea from './Common/TextResultArea';
import RadioSelect from './Common/RadioSelect';
import { getRandomCharacter } from '../utils/generateRandom';
import { addToLocalStorage } from '../utils/localStorage';

const type = "Character";
const title = type;

const radioArr = [
  {value: "onlyLower", label: "lower characters only"},
  {value: "onlyUpper", label: "upper characters only"},
  {value: "Both", label: "Both upper and lower"},
];

export default class ContentCharacter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "Both",
      result: ""
    };
  }

  handleRadioChange = (event, value) => this.setState({type: value});

  getRandomCharacter = () => {
    let newResult = getRandomCharacter(this.state.type);
    this.setState({result: newResult});
    addToLocalStorage(type, newResult);
  };

  render() {
    return (
      <div className="contentDiv">
        <ContentHeader title={title}/>
        <RadioSelect
          default="Both"
          func={this.handleRadioChange}
          arr={radioArr}
        />
        <ActionButton func={this.getRandomCharacter} />
        <TextResultArea result={this.state.result}/>
      </div>
    );
  }
}
