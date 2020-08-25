import React, { Component } from 'react';
import './App.css';
// import StateInAction from './StateInAction';
// import SimpleEvents from './SimpleEvents';
import EventAndState from './EventAndState';

// function App() {
//   return <h1>Sanity Check</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
        <EventAndState />
      </div>
    );
  }
}

export default App;
