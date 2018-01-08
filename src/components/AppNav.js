import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import HomePage from './HomePage';
import ContentNumber from './ContentNumber';
import ContentCharacter from './ContentCharacter';
import ContentDice from './ContentDice';
import ContentYesOrNo from './ContentYesOrNo';
import ContentCoin from './ContentCoin';
import ContentPoker from './ContentPoker';
import ContentSPR from './ContentSPR';
import ContentHandFrontBack from './ContentHandFrontBack';
import ContentList from './ContentList';
import ContentMahjong from './ContentMahjong';
// import Test from './test';
// import FlatButtonExampleSimple from './test';
import './AppNav.css';

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="History" />
    );
  }
}

export default class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      historyOpen: false,
      type: 0
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleHistoryToggle = () => this.setState({historyOpen: !this.state.historyOpen});

  handleHistoryClose = () => this.setState({historyOpen: false});

  handleTitleClick = () => this.setState({type: 0});

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
      case 8:
        return <ContentMahjong />;
      case 9:
        return <ContentList />;
      case 10:
        return <ContentSPR />;
      case 11:
        return <ContentHandFrontBack />;
      default:
        return <HomePage />;
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Random"
          iconElementRight={<Login />}
          onTitleClick={this.handleTitleClick}
          onLeftIconButtonClick={this.handleToggle}
          onRightIconButtonClick={this.handleHistoryToggle}
        />
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
          <MenuItem onClick={this.handleClick.bind(this, 8)}>麻将</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 9)}>列表</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 10)}>剪刀石头布</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 11)}>手心手背</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 12)}>时间</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 13)}>日期</MenuItem>
        </Drawer>
        <Drawer
          docked={false}
          width={200}
          openSecondary={true}
          open={this.state.historyOpen}
          onRequestChange={(historyOpen) => this.setState({historyOpen})}
        >
          <AppBar
            title="AppBar"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onLeftIconButtonClick={this.handleHistoryClose}
          />
        </Drawer>
        <div className="content">
          {this.getContent()}
        </div>
      </div>
    );
  }

}
