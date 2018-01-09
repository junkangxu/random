import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import getLocalStorage from '../utils/localStorage';

import localStorageName from '../utils/common';

import './ContentHistory.css';

let tableData = JSON.parse(getLocalStorage(localStorageName));

export default class ContentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "1000px"
    };
  }

  render() {
    return (
      <div>
        <div className="contentDiv">
          <Table
            height={this.state.height}
            fixedHeader={true}
            fixedFooter={false}
            selectable={false}
            multiSelectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
              enableSelectAll={true}
            >
              <TableRow className="superhead">
                <TableHeaderColumn colSpan="2" style={{textAlign: "center"}}>
                  History
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Category</TableHeaderColumn>
                <TableHeaderColumn>Value</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              deselectOnClickaway={false}
              showRowHover={true}
              stripedRows={true}
            >
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.type}</TableRowColumn>
                  <TableRowColumn>{row.value}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
