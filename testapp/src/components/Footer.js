import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/footer.scss';

class Footer extends Component {
  constructor() {
		super();
		this.state = {};
	}

  render() {
		return (
			<footer>
        <p>Created by <span>ATUL ALVY</span></p>
      </footer>
		);
  }
}

export default Footer;
