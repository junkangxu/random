import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500 } from 'material-ui/styles/colors';
import AppNav from './components/AppNav';
import './App.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <AppNav />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
