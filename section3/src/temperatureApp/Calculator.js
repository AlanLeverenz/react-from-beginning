import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '', scale: 'C' };
  }

  handleChange(e, scale) {
    this.setState({ temperature: e.target.value, scale: scale });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    let fTemp;
    let cTemp;
    if (scale === 'C') {
      //  convert celcius to fahrenheit
      fTemp = Math.round((temperature * 9) / 5 + 32);
      // don't need to convert celsius
      cTemp = temperature;
    } else if (scale === 'F') {
      // convert f to celcius
      cTemp = Math.round(((temperature - 32) * 5) / 9);
      // don't need to convert to fahrenheit
      fTemp = temperature;
    }

    return (
      <fieldset>
        <TemperatureInput
          temperature={fTemp}
          scale='F'
          handleChange={this.handleChange}
        />
        <TemperatureInput
          temperature={cTemp}
          scale='C'
          handleChange={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(cTemp)} />
      </fieldset>
    );
  }
}

export default Calculator;
