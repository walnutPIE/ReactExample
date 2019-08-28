import React, { Component, Fragment } from 'react';
import './App.css';
import MyName from './MyName.js';
import Counter from './Counter.js';
import MyComponent from './MyComponent.js';

class App extends Component {
  state = {
    counter: 0,
    error: false
  };
  componentDidCatch(error, info) {
    this.setState({ error: true });
    //console.log(error);
    //console.log(info); 에러값 api통해서 서버로 오류 내용 전송
  }
  constructor(props) {
    super(props);
    console.log('Contructor');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    if (this.state.error) {
      return <div>에러 발생</div>; //에러는 이렇게 부모 컴포넌트에서 구현함.
    }
    const name = 'J';
    const value = 2;
    const style1 = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: 12 + value + 'px'
    };
    return (
      <Fragment>
        <MyName name1="LONDON" name2="United Kindom" />
        {this.state.counter == 10 && <Counter />}
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>Click Me</button>
        <div />
        <div style={style1}>
          <h1
          //엥 이건 주석 처리됨
          >
            React Start
          </h1>
          {/*주석 처리*/}
        </div>
        <div className="App">Mute Mode : {name}</div>
        <div>
          {1 + 1 === 2 ? 'True' : 'False'}
          {2 + 2 === 4 && <div>4 for Fleaur</div>}
          {(() => {
            if (value === 1) return <div>하나</div>;
            if (value === 2) return <div>둘</div>;
            if (value === 3) return <div>셋</div>;
          })()}
        </div>
      </Fragment>
    );
  }
}

export default App;
