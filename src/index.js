import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import CitiesDisplay from './Components/CitiesDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';
let storedCities = []
let weatherData;

//*View
const Display = (() => {
  const DisplayEventsCoordinator = new EventTarget();
  const body = document.body;
  const viewContainer = document.createElement('div');
  _initBodyAndViewContainer();
  
  const searchView = Search({
    getWeatherDataByLatitudeAndLongitude,
    getWeatherDataByCityName,
    DisplayEventsCoordinator,
    root: viewContainer,
  });
  searchView.append();

  
  DisplayEventsCoordinator.addEventListener('customEvent1', (event)=>{
    console.dir(event);
  });

  function _initBodyAndViewContainer(){
    classes.add(body, classes.body);
    classes.add(viewContainer, classes.viewContainer);
    body.append(viewContainer);
  }
})()

async function getData(url){
  return fetch(url)
    .then(response => new Promise(function(resolve, reject){
      if(response.status === 200){
        resolve(response.json());
      }
      reject(new Error('Bad Response'))
    }))
}
async function getWeatherDataByLatitudeAndLongitude(latitude, longitude){
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${appID}`;
  getData(weatherDataURL)
  .then(weatherData => {
    console.log('WEATHER DATA');
    console.log(weatherData);
  })
  .catch(handleErrors);
}
async function getWeatherDataByCityName(cityInfo){
  const geoDataURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInfo}&limit=15&appid=${appID}`;
  getData(geoDataURL)
  .then(cityData => {
    console.log('CITY DATA');
    console.log(cityData);
    if(cityData.length > 0){
      if(cityData.length === 1){
        const {lat: latitude, lon: longitude} = cityData[0];
        getWeatherDataByLatitudeAndLongitude(latitude, longitude)
      } else {

      }
    } else {
      reject(new Error('No City Data Received'));
    }
  })
  .catch(handleErrors);
}

async function getFiveDayForecast(latitude, longitude){
  const count = 7;
  const weatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  const data = await getData(weatherDataURL);
  console.log(data);
}

function handleErrors(error){
  const {message} = error;
  switch(message){
    case 'Failed to fetch': {
      console.error('Error Message: Unable to Fetch')
      break;
    }
    case 'Bad Response': {
      console.error('Error Message: Unable to Get Valid Response Code')
      break;
    }
    case 'No City Data Received': {
      console.error('Error Message: No City Data Received')
      break;
    }
    default: {
      console.error('Error Message: Unspecified Error, Check Call Stack');
    }
  }
}