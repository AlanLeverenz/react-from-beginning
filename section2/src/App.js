import React, { Component } from 'react';
import './App.css';
import StateInAction from './StateInAction';

// function App() {
//   return <h1>Sanity Check</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>State Check</h1>
        <StateInAction />
      </div>
    );
  }
}

export default App;
