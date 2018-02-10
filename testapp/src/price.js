import React, { Component } from 'react';

const urlToGet = 'https://koinex.in/api/ticker'
class Price extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    fetch(urlToGet)
    .then(d => d.json())
    .then(d => {
      prices.this.setState({
        pricesData : d
      })
    })
  }
  render(){
    if(!this.state.pricesData) return(<p>Loading....</p>);
    return(
      <div>
        {Object.keys(this.state.pricesData).map((key) => (
          <h2>{key} : {this.state.pricesData[key].USD} USD</h2>
        ))}
      </div>
    );
  }
}
export default Price
