import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Card_custom.css';

class Card_custom_card extends Component {
  constructor() {
		super();
		this.state = {
      coin: [{}, {}, {}, {}, {}, {}, {}, {},{},{}],
      loaded: false
    };
  }




componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH,ETN,BAR&tsyms=INR')
    .then(results => {
      return results.json();
    }).then(data => {
      let exchange = [];
      const coinType = ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'XEM','BCH','ETN','BAR'];

      coinType.forEach((type) => {
        exchange.push({
          'coin': data['DISPLAY'][`${type}`]['INR']['FROMSYMBOL'],
          'price': data['DISPLAY'][`${type}`]['INR']['PRICE'],
          'percent': data['DISPLAY'][`${type}`]['INR']['CHANGEPCT24HOUR'],
        });
      });

      // console.log(exchange);

      this.setState({
        loaded: true,
        coin: exchange
      });
    })
    .catch(error => console.log('Error: ', error));
  }

  render() {
return (


  <div className="card-container" >

				<div className="card" >
          <img src="https://www.cryptocompare.com/media/19633/btc.png" />
          <div className="coin-data">
            <p>Bitcoin (BTC)</p>
            <p>{this.state.coin[0]['price']}</p>
            <p className={"" + (Number(this.state.coin[0]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[0]['percent']}%</p>
          </div>
        </div>

        <div className="card">
          <img src="https://www.cryptocompare.com/media/20646/eth_logo.png" />
          <div className="coin-data">
            <p>Ethereum (ETH)</p>
            <p>{this.state.coin[1]['price']}</p>
            <p className={"" + (Number(this.state.coin[1]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[1]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/19782/litecoin-logo.png" />
          <div className="coin-data" >
            <p >Litecoin (LTC)</p>
            <p>{this.state.coin[2]['price']}</p>
            <p className={"" + (Number(this.state.coin[2]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[2]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/19972/ripple.png" />
          <div className="coin-data">
            <p>Ripple (XRP)</p>
            <p>{this.state.coin[3]['price']}</p>
            <p className={"" + (Number(this.state.coin[3]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[3]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/20026/dash.png" />
          <div className="coin-data">
            <p>DigitalCash (DASH)</p>
            <p>{this.state.coin[4]['price']}</p>
            <p className={"" + (Number(this.state.coin[4]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[4]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/19969/xmr.png" />
          <div className="coin-data">
            <p>Monero (XMR)</p>
            <p>{this.state.coin[5]['price']}</p>
            <p className={"" + (Number(this.state.coin[5]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[5]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/20490/xem.png" />
          <div className="coin-data">
            <p>NEM (XEM)</p>
            <p>{this.state.coin[6]['price']}</p>
            <p className={"" + (Number(this.state.coin[6]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[6]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="https://www.cryptocompare.com/media/1383919/bch.jpg" />
          <div className="coin-data">
            <p>Bitcoin Cash (BCH)</p>
            <p>{this.state.coin[7]['price']}</p>
            <p className={"" + (Number(this.state.coin[7]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[7]['percent']}%</p>
          </div>
        </div>
        <div className="card">
          <img src="https://www.cryptocompare.com/media/14761932/electroneum.png" />
          <div className="coin-data">
            <p>Electroneum (ETN)</p>
            <p>{this.state.coin[8]['price']}</p>
            <p className={"" + (Number(this.state.coin[8]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[8]['percent']}%</p>
          </div>
        </div>
        <div className="card">
          <img src="https://www.cryptocompare.com/media/14543951/bar.png" />
          <div className="coin-data">
            <p>Titanium Blockchain (BAR)</p>
            <p>{this.state.coin[9]['price']}</p>
            <p className={"" + (Number(this.state.coin[9]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[9]['percent']}%</p>
          </div>
        </div>
			</div>

		);
  }
}

export default Card_custom_card;




// API DATA URL: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD
