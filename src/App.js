import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500 } from 'material-ui/styles/colors';
import AppNav from './components/AppNav';
import './App.css';

const muiTheme = getMuiTheme({
  fontFamily: 'Arial Black, Gadget, sans-serif',
  palette: {
    primary1Color: red500
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
