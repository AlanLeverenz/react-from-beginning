import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=7d4f2cda5bab002442683b32490d0c00`;

  return (
    <div className='App'>
      <h1>Sanity Check</h1>
    </div>
  );
}

export default App;
