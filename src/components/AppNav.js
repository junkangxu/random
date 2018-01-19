import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import SvgIcon from 'material-ui/SvgIcon';
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
import ContentTime from './ContentTime';
import ContentDate from './ContentDate';
import ContentHistory from './ContentHistory';
import ContentMap from './ContentMap';
import Footer from './Footer';

import './AppNav.css';

const GitHubUrl = "https://github.com/junkangxu/random";

const GitHubIcon = (props) => (
    <SvgIcon {...props}>
        {<path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>}
    </SvgIcon>
);

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

  handleGitHubClick = () => window.location.href = GitHubUrl;

  handleHistoryToggle = () => this.setState({historyOpen: !this.state.historyOpen});

  handleHistoryClose = () => this.setState({historyOpen: false});

  handleClick = (e) => this.setState({open: false, type: e});

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
      case 6:
        return <ContentMap />;
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
      case 12:
        return <ContentTime />;
      case 13:
        return <ContentDate />;
      case 14:
        return <ContentHistory />;
      default:
        return <HomePage />;
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Random"
          //iconElementRight={<Login />}
          iconElementRight={<IconButton><GitHubIcon /></IconButton>}
          onLeftIconButtonClick={this.handleToggle}
          onRightIconButtonClick={this.handleGitHubClick}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClick.bind(this, 0)} checked={this.state.type === 0}>主页</MenuItem>
          <br />
          <Divider />
          <br />
          <MenuItem onClick={this.handleClick.bind(this, 1)} checked={this.state.type === 1}>数字</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 2)} checked={this.state.type === 2}>英文字母</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 3)} checked={this.state.type === 3}>骰子</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 4)} checked={this.state.type === 4}>是否</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 5)} checked={this.state.type === 5}>硬币</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 6)} checked={this.state.type === 6}>地图</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 7)} checked={this.state.type === 7}>扑克牌</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 8)} checked={this.state.type === 8}>麻将</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 9)} checked={this.state.type === 9}>列表</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 10)} checked={this.state.type === 10}>剪刀石头布</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 11)} checked={this.state.type === 11}>手心手背</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 12)} checked={this.state.type === 12}>时间</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 13)} checked={this.state.type === 13}>日期</MenuItem>
          <br />
          <Divider />
          <br />
          <MenuItem onClick={this.handleClick.bind(this, 14)} checked={this.state.type === 14}>历史</MenuItem>
        </Drawer>
        <div className="content">
          {this.getContent()}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }

}
