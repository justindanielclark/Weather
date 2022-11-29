import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import countryCodes from './Data/countryCodes';
import Search from './Components/Seach'

//*View
document.body.className = classes.body;
Search(document.body)

//*App Logic
const appID = 'e6432b3e4048fffaddcfccd1781505f5';

const searchQuery = 'Bell';
const geoLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=15&appid=${appID}`
getData(geoLocationURL)
  .then(data=>{
    console.log(data);
  })
  .catch(error=>{
    console.log(error);
  })

// const latitude = '33.44';
// const longitude = '-94.04';
// const units = 'standard';
// const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${appID}`;
// getData(weatherDataURL)
// .then(data=>{
//   console.log(data);
// })
// .catch(error=>{
//   console.log(error);
// })

async function getData(url){
  const response = await fetch(url);
  const data = await response.json();
  return data;
}