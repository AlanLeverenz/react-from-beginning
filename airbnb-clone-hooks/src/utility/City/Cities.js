import React from 'react';
import City from './City';
import SlickSlider from '../Slider/Slider';

function Cities(props) {
  const cities = props.cities.map((city, i) => {
    return (
      <div key={i} className='col s3'>
        <City city={city} key={i} />
      </div>
    );
  });
  console.log({cities});
  return (
    <div className="cities-wrapper">
      <h1 className="main-header-text">{props.header}</h1>
      <SlickSlider elements={cities} />
    </div>
    )
}

export default Cities;