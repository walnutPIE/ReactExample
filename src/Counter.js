import React, { Component, Fragment } from 'react';

class Counter extends Component {
  state = {
    value: 0
  };
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrease = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>Value : {this.state.value}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
