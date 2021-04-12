import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('1. constructor()');
    super(props);
    this.state = {
      count: 0,
      intervall: null,
      timer: 0,
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log('4. componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('5. componentWillUnmount()');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.state.count && this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log('2. render()');
    return (
      <div>
        <h1>Counter</h1>
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <span>{this.state.count}</span>
        <button className="increment-btn" onClick={this.increment}>
          +
        </button>
        <br />
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Counter;
