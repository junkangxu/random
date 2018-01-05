import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppNav from './components/AppNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppNav />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
