import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {LineChart} from 'react-easy-chart';
import sugar from './sugar.jpg'

import './App.css';

export default class DashBoard extends Component{
  constructor(props){
    super(props)

    this.state = {
      open: false,
      item:'',
      mode: true,
      opt: 1
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
          <MenuItem onClick={this.backToUser.bind(this)}>user input</MenuItem>
          <MenuItem onClick={this.backToMonthly.bind(this)}>Monthly chart</MenuItem>
          <MenuItem onClick={this.backToList.bind(this)}>list to  buy</MenuItem>
          </Drawer>
          {
          (this.state.opt === 1 && this.state.mode)?
          <Card>
            <CardHeader
              title="Item Add"
            />
          <CardActions style = {{textAlign: 'center'}}>
              <TextField
                floatingLabelText="Item Name"
                onChange = {this.itemChange.bind(this)}/><br/><br/>
              <FlatButton label="Add it" onClick = {this.submit.bind(this)}/>
            </CardActions>
          </Card>
          :
          this.state.opt === 1 &&
          <Card>
            <CardMedia
              overlay={<CardTitle title="Sugar" />}
            >
              <img src={sugar} alt="" />
            </CardMedia>
            <CardTitle title="Sugar" />
            <CardText>
              Sugar info add here .......
            </CardText>
            <CardActions>
              <FlatButton label="Add new item" onClick = {this.submit.bind(this)}/>
            </CardActions>
          </Card>
        }
        {
          this.state.opt === 2 &&
          <Card>
            <CardHeader
              title="Montly data"
            />
            <LineChart
      xType={'time'}
      axes
      interpolate={'cardinal'}
      width={750}
      height={250}
      data={[
        [
          { x: '1-Jan-15', y: 20 },
          { x: '1-Feb-15', y: 10 },
          { x: '1-Mar-15', y: 33 },
          { x: '1-Apr-15', y: 45 },
          { x: '1-May-15', y: 15 }
        ], [
          { x: '1-Jan-15', y: 10 },
          { x: '1-Feb-15', y: 15 },
          { x: '1-Mar-15', y: 13 },
          { x: '1-Apr-15', y: 15 },
          { x: '1-May-15', y: 10 }
        ]
      ]}
    />

            <LineChart
      xType={'time'}
      axes
      interpolate={'cardinal'}
      width={750}
      height={250}
      data={[
        [
          { x: '1-Jan-15', y: 20 },
          { x: '1-Feb-15', y: 10 },
          { x: '1-Mar-15', y: 33 },
          { x: '1-Apr-15', y: 45 },
          { x: '1-May-15', y: 15 }
        ], [
          { x: '1-Jan-15', y: 10 },
          { x: '1-Feb-15', y: 15 },
          { x: '1-Mar-15', y: 13 },
          { x: '1-Apr-15', y: 15 },
          { x: '1-May-15', y: 10 }
        ]
      ]}
    />


            <LineChart
      xType={'time'}
      axes
      interpolate={'cardinal'}
      width={750}
      height={250}
      data={[
        [
          { x: '1-Jan-15', y: 20 },
          { x: '1-Feb-15', y: 10 },
          { x: '1-Mar-15', y: 33 },
          { x: '1-Apr-15', y: 45 },
          { x: '1-May-15', y: 15 }
        ], [
          { x: '1-Jan-15', y: 10 },
          { x: '1-Feb-15', y: 15 },
          { x: '1-Mar-15', y: 13 },
          { x: '1-Apr-15', y: 15 },
          { x: '1-May-15', y: 10 }
        ]
      ]}
    />
          </Card>
        }
        {
          this.state.opt === 3 &&
          <Card>
            <CardHeader
              title="List view"
            />
          <CardActions style = {{textAlign: 'center'}}>
              <TextField
                floatingLabelText="Item Name"
                onChange = {this.itemChange.bind(this)}/><br/><br/>
              <FlatButton label="Add it" onClick = {this.submit.bind(this)}/>
            </CardActions>
          </Card>
        }



        </div>
    );
  }
}
