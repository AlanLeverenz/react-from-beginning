import React, { Component } from 'react';
import './App.css';
// import StateInAction from './StateInAction';
// import SimpleEvents from './SimpleEvents';
// import EventAndState from './EventAndState';
import StatePractice from './StatePractice';

// function App() {
//   return <h1>Sanity Check</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <StatePractice />
      </div>
    );
  }
}

export default App;
