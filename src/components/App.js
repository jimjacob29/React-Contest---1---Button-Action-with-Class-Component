import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={() =>
            this.setState({
              text: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
            })
          }
        >
          click
        </button>
        {this.state.text ? <p id="para">{this.state.text}</p> : null}
      </div>
    );
  }
}

export default App;
