import React, { Component, Fragment } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(nextProps, State) {
    if (State.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, state) {
    if (nextProps.value == 10) return false; //이후에 나오는 모든 함수, 렌더링 실행안됨.
    return true;
  }
  componentDidUpdate(prevProps, state) {
    if (this.props.value !== prevProps.value)
      console.log('value바뀜', this.props.value);
  }
  componentWillUnmount() {
    console.log('Goodbye');
  }
  render() {
    return (
      <div>
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}
export default MyComponent;
