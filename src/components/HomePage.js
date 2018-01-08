import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

import './HomePage.css';

const HomePage = () => (
  <div>
    <Paper zDepth={2}>
    <Tabs>
      <Tab label="Info">
        <div className="header">
          <h3>让随机帮助你做决定</h3>
          <Divider />
        </div>
        <div className="body">
          <p>现有工具：</p>
          <div className="bodyLeft">
            <ul>
              <li>数字</li>
              <li>英文字母</li>
              <li>骰子</li>
              <li>是否</li>
              <li>硬币</li>
              <li>地图</li>
              <li>扑克牌</li>
            </ul>
          </div>
          <div className="bodyRight">
            <ul>
              <li>麻将</li>
              <li>列表</li>
              <li>剪刀石头布</li>
              <li>手心手背</li>
              <li>时间</li>
              <li>日期</li>
            </ul>
          </div>
        </div>
      </Tab>
      <Tab label="Contact">
        <div className="header">
          <h3>联系方式：</h3>
          <Divider />
        </div>
        <div className="body">
        <List className="listBody">
          <ListItem
            leftIcon={<CommunicationEmail />}
            primaryText="david.xujunkang@gmail.com"
            secondaryText="Personal"
          />
          <ListItem
            leftIcon={<CommunicationEmail />}
            primaryText="junkangxu"
            secondaryText="Personal"
          />
          </List>
        </div>
      </Tab>
    </Tabs>
    </Paper>
  </div>
);

export default HomePage;
