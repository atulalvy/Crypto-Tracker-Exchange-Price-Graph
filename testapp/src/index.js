import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DashBoard from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <DashBoard />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
