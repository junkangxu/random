import React from 'react';
import Divider from 'material-ui/Divider';

const ContentHeader = (props) => (
  <div className="header">
    <h3>{props.title}</h3>
    <Divider/ >
  </div>
);

export default ContentHeader;
