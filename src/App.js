import React, { Component } from 'react';
import PropsDeStructuring from './PropsDeStructuring';
import StateDestructuring from './StateDestructuring';

class App extends Component {
  render() {
    return (
      <div>
          state and props destructuring
          <StateDestructuring></StateDestructuring>
          <PropsDeStructuring name="Akhil" weight="69" height="170"/>
      </div>
    );
  }
}

export default App;