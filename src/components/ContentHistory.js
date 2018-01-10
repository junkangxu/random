import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import getLocalStorage, { removeLocalStorage } from '../utils/localStorage';

import localStorageName from '../utils/common';

import './ContentHistory.css';

export default class ContentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "1200px",
      tableData: []
    };
  }

  componentDidMount = () => {
    this.reloadLocalStorage();
  };

  reloadLocalStorage = () => {
    let newTableData = JSON.parse(getLocalStorage(localStorageName));
    if (newTableData === null) {
      newTableData = [];
    }
    this.setState({tableData: newTableData});
  }

  handleClear = () => {
    removeLocalStorage(localStorageName);
    this.reloadLocalStorage();
  };

  render() {
    return (
      <div>
        <div className="buttonDiv">
          <RaisedButton
            className="button"
            label="CLEAR"
            secondary={true}
            fullWidth={true}
            onClick={this.handleClear}
          />
        </div>
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
              {this.state.tableData.map((row, index) => (
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
