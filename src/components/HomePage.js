import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentHeader from './Common/ContentHeader';

import './HomePage.css';

const InfoTitle = "让随机帮助你做决定";
const ContactTitle = "联系方式";

const Left = () => (
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
);

const Right = () => (
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
);

const HomePage = () => (
  <div>
    <Paper zDepth={2}>
    <Tabs>
      <Tab label="Info">
        <ContentHeader title={InfoTitle} />
        <div className="body">
          <h3>现有工具：</h3>
          <Left />
          <Right />
        </div>
      </Tab>
      <Tab label="Contact">
        <ContentHeader title={ContactTitle} />
        <div className="body">
        <List className="listBody">
          <ListItem
            leftIcon={<CommunicationEmail />}
            primaryText="david.xujunkang@gmail.com"
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
