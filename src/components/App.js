import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      show: false
    };
  }
  handleClick = () => {
    this.setState({
      text: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
    });
    this.setState({
      show: true
    });
  };
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>
          click
        </button>
        {this.state.show ? <p id="para">{this.state.text}</p> : null}
      </div>
    );
  }
}

export default App;
