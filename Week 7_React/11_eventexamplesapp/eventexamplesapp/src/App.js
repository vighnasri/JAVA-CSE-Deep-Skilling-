import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };


  sayWelcome = (msg) => {
    alert(msg +" to Cognizant Digital Nuture 4.0");
  };

  handleClick = (e) => {
    alert("Button clicked");
  };

  render() {
    return (
      <div>
        <h1>Counter Value: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button><br></br>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br />

        <button onClick={this.handleClick}>On Click</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
