import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
    };
  }

  // 7d4f2cda5bab002442683b32490d0c00`;
  // fc675bd9b8d62b7af66e3d118b418449
  componentDidMount() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=7d4f2cda5bab002442683b32490d0c00`;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        temp: res.data.main.temp,
      });
    });
    const elems = document.querySelectorAll('.modal');
    const instances = window.M.Modal.init(elems);
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.temp}</h1>
        {/* <!-- Modal Trigger --> */}
        <a
          className='waves-effect waves-light btn modal-trigger'
          href='#modal1'
        >
          Modal
        </a>

        {/* <!-- Modal Structure --> */}
        <div id='modal1' className='modal'>
          <div className='modal-content'>
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              className='modal-close waves-effect waves-green btn-flat'
            >
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
