import axios from 'axios';
const weatherApi = 'http://api.openweathermap.org/data/2.5/weather';
// const weatherAPIKey = '6f3f23c0f1a2fcb7edee25d08cb9cf62';
const weatherAPIKey = '7d4f2cda5bab002442683b32490d0c00';
const scale = 'imperial'; //metric

export default (city) => {
  const weatherUrl = `${weatherApi}?q=${city}&units=${scale}&appid=${weatherAPIKey}`;
  console.log(city);
  return {
    type: 'cityUpdate',
    payload: {},
  };
};
