import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ContentNumber from './ContentNumber';
import ContentCharacter from './ContentCharacter';
import ContentDice from './ContentDice';
import ContentYesOrNo from './ContentYesOrNo';
import ContentCoin from './ContentCoin';
import ContentPoker from './ContentPoker';
import ContentSPR from './ContentSPR';
import ContentHandFrontBack from './ContentHandFrontBack';
import Test from './test';
// import FlatButtonExampleSimple from './test';
import './AppNav.css';

export default class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 0
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleClick(e) {
    this.setState({open: false, type: e});
  }

  getContent() {
    switch (this.state.type) {
      case 1:
        return <ContentNumber />;
      case 2:
        return <ContentCharacter />;
      case 3:
        return <ContentDice />;
      case 4:
        return <ContentYesOrNo />;
      case 5:
        return <ContentCoin />;
      case 7:
        return <ContentPoker />;
      case 10:
        return <ContentSPR />;
      case 11:
        return <ContentHandFrontBack />;
      default:
        return;
    }
  }

  render() {
    return (
      <div>
        <AppBar title="Random" onLeftIconButtonClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClick.bind(this, 1)}>数字</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 2)}>英文字母</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 3)}>骰子</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 4)}>是否</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 5)}>硬币</MenuItem>
          <MenuItem onClick={this.handleClose}>地图</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 7)}>扑克牌</MenuItem>
          <MenuItem onClick={this.handleClose}>麻将</MenuItem>
          <MenuItem onClick={this.handleClose}>列表</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 10)}>剪刀石头布</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 11)}>手心手背</MenuItem>
        </Drawer>
        <div className="content">
          {this.getContent()}
        </div>
      </div>
    );
  }

}
