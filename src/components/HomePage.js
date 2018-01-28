import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentHeader from './Common/ContentHeader';

import './HomePage.css';

const InfoTitle = "Let random help you make decisions";
const ContactTitle = "Contact";

const Left = () => (
  <div className="bodyLeft">
    <ul>
      <li>Number</li>
      <li>Character</li>
      <li>Dice</li>
      <li>Yes/No</li>
      <li>Coin</li>
      <li>Map</li>
      <li>Poker</li>
    </ul>
  </div>
);

const Right = () => (
  <div className="bodyRight">
    <ul>
      <li>Mahjong</li>
      <li>List</li>
      <li>Scissor Paper Rock</li>
      <li>Hand Front & Back</li>
      <li>Time</li>
      <li>Date</li>
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
          <h3>Tools：</h3>
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
