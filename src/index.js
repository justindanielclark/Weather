import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import IconDisplay from './Components/IconDisplay'
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';
// let storedCities = [];
// let weatherData;

let storedCities = [
  {
      "name": "Bellflower",
      "lat": 33.8825705,
      "lon": -118.1167679,
      "country": "US",
      "state": "California"
  },
  {
      "name": "Bellflower",
      "lat": 40.3400336,
      "lon": -88.5270053,
      "country": "US",
      "state": "Illinois"
  },
  {
      "name": "Bellflower",
      "lat": 39.0067081,
      "lon": -91.3551564,
      "country": "US",
      "state": "Missouri"
  }
];
let weatherData = {
  "coord": {
      "lon": -118.1168,
      "lat": 33.8826
  },
  "weather": [
      {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 55.65,
      "feels_like": 54.3,
      "temp_min": 52.9,
      "temp_max": 58.39,
      "pressure": 1017,
      "humidity": 72
  },
  "visibility": 10000,
  "wind": {
      "speed": 1.01,
      "deg": 193,
      "gust": 1.99
  },
  "clouds": {
      "all": 100
  },
  "dt": 1669878301,
  "sys": {
      "type": 2,
      "id": 2079115,
      "country": "US",
      "sunrise": 1669819133,
      "sunset": 1669855434
  },
  "timezone": -28800,
  "id": 5327422,
  "name": "Bellflower",
  "cod": 200
};

//*View
const body = document.body;
body.className = classes.body;
// IconDisplay(body);
// const searchView = Search(body, {
//   getWeatherDataByLatitudeAndLongitude,
//   getWeatherDataByCityName,
// });
const weatherDisplayView = WeatherDisplay(body, storedCities[0], weatherData);

async function getData(url){
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function getWeatherDataByLatitudeAndLongitude(latitude, longitude){
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${appID}`;
  const data = await getData(weatherDataURL);
  weatherData = data;
}
async function getWeatherDataByCityName(cityInfo){
  const geoDataURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInfo}&limit=5&appid=${appID}`;
  const cityData = await getData(geoDataURL);
  storedCities.push(...cityData);
  const {lat: latitude, lon: longitude} = storedCities[0];
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${appID}`
  const data = await getData(weatherDataURL);
  console.log(storedCities);
  console.log(data);
}

async function getFiveDayForecast(latitude, longitude){
  const count = 7;
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  const data = await getData(weatherDataURL);
  console.log(data);
}