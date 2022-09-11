import React, { Component } from 'react';
import CounterComponent from './CounterComponent';
import StateComponent from './StateComponent';

class App extends Component {
  render() {
    return (
      <div>
         this is example of state component do's and don't do's
         <CounterComponent/>
      </div>
    );
  }
}

export default App;