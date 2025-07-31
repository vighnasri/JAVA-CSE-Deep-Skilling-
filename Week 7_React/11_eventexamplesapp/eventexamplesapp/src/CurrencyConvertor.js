import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const euro = (this.state.rupees / 90).toFixed(2); // example rate
    this.setState({ euros: euro });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <input
          type="text"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter Rupees"
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>Euros: {this.state.euros}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
