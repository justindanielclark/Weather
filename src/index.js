import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
import Search from './Components/Search';
import WeatherDisplay from './Components/WeatherDisplay';
import CitiesDisplay from './Components/CitiesDisplay';

const appID = 'e6432b3e4048fffaddcfccd1781505f5';
let currentlySearching = false;

//*View
const Display = (() => {
  const _El = {
    body: document.body,
    viewContainer: document.createElement('div'),
    slideContainer: document.createElement('div'),
  }
  let _activeDisplay, _displayToRemove;
  let displayUnits = 'Imperial'; // || Metric
  _init();
  function _init(){
    classes.add(_El.body, classes.body);
    classes.add(_El.viewContainer, classes.viewContainer);
    classes.add(_El.slideContainer, classes.slideContainer);
    _El.viewContainer.append(_El.slideContainer);
    _El.body.append(_El.viewContainer);
    _El.slideContainer.addEventListener('animationend', _handleAnimationend_slideContainer);
    _activeDisplay = Search({
      searchByCityInfo,
      searchByCoordInfo,
      root: _El.slideContainer,
    });
    _activeDisplay.append();
  }
  function _handleAnimationend_slideContainer(event){
    const {animationName} = event;
    if(animationName === 'slideLeft'){
      classes.remove(this, classes.animations.slideLeft);
      _displayToRemove.remove();
    }
    if(animationName === 'slideRight'){
      classes.remove(this, classes.animations.slideRight);
      _displayToRemove.remove();
    }
  }
  function showCitiesView(cityData){
    _displayToRemove = _activeDisplay;
    _activeDisplay = CitiesDisplay({
      showSearchView,
      searchByCoordInfo,
      displayUnits,
      toggleDisplayUnits,
      root: _El.slideContainer, 
    });
    _activeDisplay.append();
    _activeDisplay.update(cityData.data);
    classes.add(_El.slideContainer, classes.animations.slideLeft);
  }
  function showSearchView(){
    _displayToRemove = _activeDisplay;
    _activeDisplay = Search({
      searchByCityInfo,
      searchByCoordInfo,
      root: _El.slideContainer,
    });
    classes.add(_El.slideContainer, classes.animations.slideRight);
    _activeDisplay.prepend()
  }
  function showWeatherView(currentWeather, forecastWeather){
    _displayToRemove = _activeDisplay;
    _activeDisplay = WeatherDisplay({
      root: _El.slideContainer,
      showSearchView,
      displayUnits,
      toggleDisplayUnits
    });
    _activeDisplay.append();
    _activeDisplay.update(currentWeather, forecastWeather)
    classes.add(_El.slideContainer, classes.animations.slideLeft);
  }
  function toggleDisplayUnits(){
    if(displayUnits === 'Imperial'){
      displayUnits = 'Metric';
    } else {
      displayUnits = 'Imperial';
    }
  }
  function showWarning(message){
    if(_activeDisplay.showWarning !== undefined){
      _activeDisplay.showWarning(message);
    }
  }
  function searchByCityInfo(cityQuery){
    if(!currentlySearching){
      currentlySearching = true;
      getWeatherDataByCityName(cityQuery)
      .then(data=>{
        switch(data.dataType){
          case 'coordData': {
            searchByCoordInfo(data.latitude, data.longitude, false);
            break;
          }
          case 'citiesData': {
            showCitiesView(data);
            currentlySearching = false;
            break;
          }
        }
      })
      .catch(handleSearchErrors)
    }
  }
  function searchByCoordInfo(latitude, longitude, userGenerated){
    if(!currentlySearching || (currentlySearching && !userGenerated)){
      currentlySearching = true;
      getWeatherDataByLatitudeAndLongitude(latitude, longitude)
      .then(data => {
        showWeatherView(data.currentWeatherData, data.forecastWeatherData)
        currentlySearching = false;
      })
      .catch(handleSearchErrors)
    }
  }
  function handleSearchErrors(error){
    const {message} = error;
    currentlySearching = false;
    switch(message){
      case 'Failed to fetch': {
        showWarning('Failed to fetch: API Server Currently Experiencing Technical Issues');
        break;
      }
      case 'Bad Response': {
        showWarning('Bad Response: API Server Currently Experiencing Technical Issues');
        break;
      }
      case 'No City Data Received': {
        showWarning('No City Data Found for That Query');
        break;
      }
      default: {
        showWarning('Generic Error: API Server Currently Experiencing Technical Issues');
      }
    }
  }
})()

function getData(url){
  console.log('trying to fetch');
  return fetch(url)
    .then(response => new Promise(function(resolve, reject){
      if(response.status === 200){
        resolve(response.json());
      }
      reject(new Error('Bad Response'))
    }))
}
function getWeatherDataByLatitudeAndLongitude(latitude, longitude){
  const currentWeatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  const forecastWeatherDataURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appID}&units=imperial&lang=en`;
  return Promise.all([getData(currentWeatherDataURL), getData(forecastWeatherDataURL)])
  .then(weatherData => {
    const [currentWeatherData, forecastWeatherData] = weatherData;
    return {
      dataType: 'weatherData',
      currentWeatherData, 
      forecastWeatherData
    }
  })
}
function getWeatherDataByCityName(cityInfo){
  const geoDataURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInfo}&limit=15&appid=${appID}`;
  return getData(geoDataURL)
  .then(cityData => new Promise((resolve, reject)=>{
    if(cityData.length > 0){
      resolve(cityData)
    } else {
      reject(new Error('No City Data Received'));
    }
  }))
  .then(cityData => {
    if(cityData.length === 1){
      const {lat: latitude, lon: longitude} = cityData[0];
      return {
        dataType: 'coordData',
        latitude,
        longitude,
      }
    } else {
      return {
        dataType: 'citiesData',
        data: cityData,
      }
    }
  })
}
