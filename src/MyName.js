import React, { Component } from 'react';

const MyNameFunc = ({ name1, name2 }) => {
  return (
    <div>
      {name1}, {name2}에 오신 것을 환영합니다!
    </div>
  );
}; //함수형으로 하면 Component import안해도 됨.

class MyName extends Component {
  static defaultProps = {
    name1: 'Seoul',
    name2: 'South Korea'
  };
  render() {
    return (
      <div>
        Welcome to{' '}
        <b>
          {this.props.name1}, {this.props.name2}
        </b>
      </div>
    );
  }
}

export default MyName;
