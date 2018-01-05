import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

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
          <MenuItem onClick={this.handleClose}>数字</MenuItem>
          <MenuItem onClick={this.handleClose}>英文字母</MenuItem>
          <MenuItem onClick={this.handleClose}>骰子</MenuItem>
          <MenuItem onClick={this.handleClose}>是否</MenuItem>
          <MenuItem onClick={this.handleClose}>硬币</MenuItem>
          <MenuItem onClick={this.handleClose}>地图</MenuItem>
          <MenuItem onClick={this.handleClose}>扑克牌</MenuItem>
          <MenuItem onClick={this.handleClose}>麻将</MenuItem>
          <MenuItem onClick={this.handleClose}>列表</MenuItem>
          <MenuItem onClick={this.handleClose}>剪刀石头布</MenuItem>
          <MenuItem onClick={this.handleClose}>手心手背</MenuItem>
        </Drawer>
      </div>
    );
  }

}
