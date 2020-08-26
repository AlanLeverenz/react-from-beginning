import React, { Component } from 'react';

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: 'HELLO WORLD',
      imageWidth: '',
    };
  }

  handleOnFocus = () => {
    console.log('OnFocus event');
    this.setState({
      message: 'Please fill out the form to agree to site terms of service',
    });
  };

  handleChange = (event) => {
    console.dir(event.target);
    this.setState({
      message: event.target.value,
    });
    console.log(this.state.message);
  };

  handleOnMouseEnter = (event) => {
    console.log('Mouse Enter!');
    this.setState({
      message: '',
      imageWidth: '',
    });
    event.preventDefault();
  };

  imageLoad = (event) => {
    console.dir(event.target);
    if (event.target.width > 100) {
      console.log('Your image is large!');
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            onFocus={this.handleOnFocus}
            type='text'
            placeholder='Enter some text'
          />
        </form>
        <h3 onMouseEnter={this.handleOnMouseEnter}>{this.state.message}</h3>
        <img
          onLoad={this.imageLoad}
          alt='nature'
          src='http://lorempixel.com/400/400/nature/'
        />
      </div>
    );
  }
}

export default StatePractice;

// {this.state.text} - {this.props.name}
// <button onClick={this.handleClick}>Click Me!</button>
