import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SimpleModal from './Modals/SimpleModal';
import getLocalStorage, { removeLocalStorage } from '../utils/localStorage';
import localStorageName from '../utils/common';
import './ContentHistory.css';

const dialogContent = "Are you sure you want to clear the history ?";
const dialogTitle = "Clear History";

export default class ContentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      height: "400px",
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
      <div className="contentDiv">
        <SimpleModal
          title={dialogTitle}
          content={dialogContent}
          confirmFunc={this.handleClear}
        />
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
                  历史
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
