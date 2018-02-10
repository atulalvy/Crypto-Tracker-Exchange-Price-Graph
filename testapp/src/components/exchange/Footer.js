import React from 'react';


class Footer extends React.Component {
  constructor(props){
    super(props);
    this.style = {
      progressBar: {
        bottom: 0,
        right: 0,
        marginTop: '100px',
        textAlign: 'center',
        border: 0
      }
    }
  }

  render() {
    return (
      <div style={this.style.progressBar}>

      </div>
    );
  }
}

export default Footer;
