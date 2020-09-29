import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import ProduceDept from './components/ProduceDept';
import MeatDept from './components/MeatDept';

function App() {
  return (
    <div className='App'>
      <FrozenDept />
      <ProduceDept />
      <MeatDept />
    </div>
  );
}

export default App;
