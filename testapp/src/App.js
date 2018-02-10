import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './App.css'
import  './components/App.css';

import {LineChart} from 'react-easy-chart';

import ReactDOM from 'react-dom';

import styles from './styles/app.scss';
import Card_c from './components/Card_custom';
import BitCoin_g from './components/Bitcoin_graph';
import exchager_indian from './components/exchange/exchager_indian';
import Bitcoin from './components/exchange/Bitcoin.js';
import Ethereum from './components/exchange/Ethereum.js';
import Litecoin from './components/exchange/Litecoin.js';
import BitcoinCash from './components/exchange/BitcoinCash.js';
import Header from './components/exchange/Header.js';
import Footer from './components/exchange/Footer.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';






export default class DashBoard extends Component{




  constructor(props){
    super(props)

    this.state = {

      open: false,
      item:'',
      mode: true,
      opt: 1,
      weight:'hello'
    }
  }


  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false})
  itemChange(e,str){
    this.setState({item:str})
  }



  submit(){
    this.setState({mode: !this.state.mode})
  }
  backToUser(){
    this.setState({opt: 1})
    this.setState({mode: this.state.mode})
  }
  backToMonthly(){
    this.setState({opt: 2})
  }
  backToList(){
    this.setState({opt: 3})
  }


  render() {
    return (

      <div>

      <AppBar title = "Dashboard" onLeftIconButtonClick={this.handleToggle}/>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem onClick={this.backToUser.bind(this)}>Cryptocurrency Prices</MenuItem>
          <MenuItem onClick={this.backToMonthly.bind(this)}>Price history - Graph</MenuItem>
          <MenuItem onClick={this.backToList.bind(this)}>Exchange Price</MenuItem>
          </Drawer>
          {
          this.state.opt === 1 &&




            <div className="app-container">
              <h1>Cryptocurrency Exchanges</h1>
              <h1> </h1>
              <h4>Cryptocurrency exchange rates (INR). Percentage change over last 24 hours.</h4>
              <Card_c />
              <p>Data provided by <a href="https://www.cryptocompare.com/api" target="_blank">CryptoCompare</a></p>

            </div>




        }

        {
          this.state.opt === 2 &&
          <Card>
              <BitCoin_g/>
          </Card>
        }


        {
          this.state.opt === 3 &&
          <Card>
            <MuiThemeProvider  muiTheme={getMuiTheme(lightBaseTheme)}>
              <div>

                <Header/>

                <Bitcoin />

                <Bitcoin/>
                <Ethereum/>
                <Litecoin/>
                <BitcoinCash/>
                <Footer/>
              </div>
            </MuiThemeProvider>

          </Card>
        }



        </div>
    );
  }
}
