import React from 'react';

import Counter from './Components/Counter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <div className="App">
        <h1>Workshop -- React State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide Counter' : 'Show Counter'}
        </button>
        {this.state.isVisible && <Counter   />}
      </div>
    );
  }
}

export default App;
