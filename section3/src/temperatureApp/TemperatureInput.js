import React, { Component } from 'react';
import './temperatureInput.css';

// run anonymous rocket function to use the event and scale
class TemperatureInput extends Component {
  render() {
    const temperature = this.props.temperature;

    // inline style object
    let style;
    // styled component
    let hotClass;
    if (
      (temperature > 100 && this.props.scale === 'C') ||
      (temperature > 212 && this.props.scale === 'F')
    ) {
      style = {
        color: 'red',
        backgroundColor: 'gold',
        fontSize: 20,
      };
      hotClass = 'too-hot';
    }

    return (
      <div className='temp-input'>
        <legend className={hotClass}>
          Enter temperature in {this.props.scale}:
        </legend>
        <input
          value={temperature}
          onChange={(e) => {
            this.props.handleChange(e, this.props.scale);
          }}
        />
      </div>
    );
  }
}

export default TemperatureInput;
