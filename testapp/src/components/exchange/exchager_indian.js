import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Bitcoin from './Bitcoin.js';
import Ethereum from './Ethereum.js';
import Litecoin from './Litecoin.js';
import BitcoinCash from './BitcoinCash.js';
import Header from './Header.js';
import Footer from './Footer.js';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <MuiThemeProvider  muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>

          <Header/>
          <Bitcoin/>
          <Ethereum/>
          <Litecoin/>
          <BitcoinCash/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
