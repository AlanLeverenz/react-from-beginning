import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        <Route exact path='/' component={Home} />
        <Route exact path='/about/:who' component={About} />
      </div>
    </Router>
  );
}

export default App;
