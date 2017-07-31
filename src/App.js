import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ButtonAppBar from './components/NavBar'
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ButtonAppBar />
          <Body />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
