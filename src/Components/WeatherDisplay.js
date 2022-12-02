import classes from "../Stylesheets/classes";
import countryCodes from "../Data/countryCodes";
import IconMap from "../Assets/IconMap";

const WeatherDisplay = (root, cityData, weatherData) => {
  const now = new Date();
  const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
  const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)
  console.log(utcSecondsSinceEpoch);

  console.log(cityData);
  console.log(weatherData);
  let tempDisplay = 'Fahrenheit';
  const {clouds, coord, main, weather, wind, dt, sys, visibility} = weatherData;
  const {temp, feels_like, temp_min, temp_max, humidity} = main;
  const {sunrise, sunset} = sys;

  
  const _IconCodeSVGs = {
    //Thunderstorms
    '200': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '201': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '202': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '210': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '211': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '212': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '221': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '230': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '231': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    '232': {day: 'thunderstorms_day', night: 'thunderstorms_night'},
    //Drizzle
    '300': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '301': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '302': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '310': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '311': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '312': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '313': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '314': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '321': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    //Rain
    '500': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '501': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '502': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '503': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '504': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '511': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '520': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '521': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '522': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    '531': {day: 'partly_cloudy_day_rain', night: 'partly_cloudy_night_rain'},
    //Snow
    '600': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '601': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '602': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '611': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '612': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '613': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '615': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '616': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '620': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '621': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    '622': {day: 'partly_cloudy_day_snow', night: 'partly_cloudy_night_snow'},
    //Atmosphere
    '701': {day: 'mist', night: 'mist'},
    '711': {day: 'partly_cloudy_day_smoke', night: 'partly_cloudy_night_smoke'},
    '721': {day: 'haze_day', night: 'haze_night'},
    '731': {day: 'dust_day', night: 'dust_night'},
    '741': {day: 'fog_day', night: 'fog_night'},
    '751': {day: 'dust_day', night: 'dust_night'},
    '761': {day: 'dust_day', night: 'dust_night'},
    '762': {day: 'dust_day', night: 'dust_night'},
    '771': {day: 'wind', night: 'wind'},
    '781': {day: 'tornado', night: 'tornado'},
    //Clear
    '800': {day: 'clear_day', night: 'clear_night'},
    '801': {day: 'clear_day', night: 'clear_night'},
    '802': {day: 'partly_cloudy_day', night: 'partly_cloudy_night'},
    '803': {day: 'partly_cloudy_day', night: 'partly_cloudy_night'},
    '804': {day: 'partly_cloudy_day', night: 'partly_cloudy_night'},
  }
  const _El = {
    container: document.createElement('div'),

    topContainer: document.createElement('div'),
    weatherImg: document.createElement('img'),

    cityInfoContainer: document.createElement('div'),
    title: document.createElement('h1'),
    subTitle: document.createElement('h2'),

    temperatureInfoContainer: document.createElement('div'),
    temperatureInfoPara: document.createElement('p'),
    temperatureInfoBottomContainer: document.createElement('div'),
    temperatureInfoMinPara: document.createElement('p'),
    temperatureInfoMaxPara: document.createElement('p'),
    temperatureInfoFeelsLikePara: document.createElement('p'),

    bottomContainer: document.createElement('div'),
    cloudsInfo: document.createElement('div'),
    cloudsInfoImg: document.createElement('img'),
    cloudsInfoPara: document.createElement('p'),

    windInfo: document.createElement('div'),
    windInfoImg: document.createElement('img'),
    windInfoPara: document.createElement('p'),

    visibilityInfo: document.createElement('div'),
    visibilityInfoImg: document.createElement('img'),
    visibilityInfoPara: document.createElement('p'),

    humidityInfo: document.createElement('div'),
    humidityInfoImg: document.createElement('img'),
    humidityInfoPara: document.createElement('p'),

  }
  _init();
  root.append(_El.container);
  function _init(){
    _init_applyClasses();
    _init_applyAttributes();
    _init_buildDOMTree();
    _outputValues();
    _wireHandlers();

    function _init_applyClasses(){
      for(let element in _El){
        if(classes.weatherDisplay[element]){
          classes.add(_El[element], classes.weatherDisplay[element])
        }
      }
      classes.add(_El.temperatureInfoMinPara, classes.weatherDisplay.temperatureInfo);
      classes.add(_El.temperatureInfoMaxPara, classes.weatherDisplay.temperatureInfo);
      classes.add(_El.temperatureInfoFeelsLikePara, classes.weatherDisplay.temperatureInfo);
      classes.add(_El.cloudsInfo, classes.weatherDisplay.infoContainer);
      classes.add(_El.windInfo, classes.weatherDisplay.infoContainer);
      classes.add(_El.visibilityInfo, classes.weatherDisplay.infoContainer);
      classes.add(_El.humidityInfo, classes.weatherDisplay.infoContainer);
      classes.add(_El.cloudsInfoImg, classes.weatherDisplay.infoImg);
      classes.add(_El.windInfoImg, classes.weatherDisplay.infoImg);
      classes.add(_El.visibilityInfoImg, classes.weatherDisplay.infoImg);
      classes.add(_El.humidityInfoImg, classes.weatherDisplay.infoImg);
      classes.add(_El.cloudsInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.windInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.visibilityInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.humidityInfoPara, classes.weatherDisplay.infoPara);
    }
    function _init_applyAttributes(){

    }
    function _init_buildDOMTree(){
      _El.container.append(_El.topContainer, _El.bottomContainer);
      _El.topContainer.append(_El.weatherImg, _El.cityInfoContainer, _El.temperatureInfoContainer);
      _El.cityInfoContainer.append(_El.title, _El.subTitle);
      _El.temperatureInfoContainer.append(_El.temperatureInfoPara, _El.temperatureInfoBottomContainer);
      _El.temperatureInfoBottomContainer.append(_El.temperatureInfoMinPara, _El.temperatureInfoMaxPara, _El.temperatureInfoFeelsLikePara);
      _El.bottomContainer.append(_El.cloudsInfo, _El.windInfo, _El.visibilityInfo, _El.humidityInfo)
      _El.cloudsInfo.append(_El.cloudsInfoImg, _El.cloudsInfoPara);
      _El.windInfo.append(_El.windInfoImg, _El.windInfoPara);
      _El.visibilityInfo.append(_El.visibilityInfoImg, _El.visibilityInfoPara);
      _El.humidityInfo.append(_El.humidityInfoImg, _El.humidityInfoPara);
    }
    
  }
  function _wireHandlers(){
    return null;
  }
  function _outputValues(){
    const dayOrNight = (dt >= sunrise && dt <= sunset) ? 'day' : 'night';
    _El.weatherImg.src = IconMap[_IconCodeSVGs[weather[0].id][dayOrNight]]
    _El.title.innerText = cityData.name;
    const stateName = cityData.state ? cityData.state + ', ' : '';
    const countryData = countryCodes[countryCodes.findIndex(c=>c.code === cityData.country)];
    const countryName = countryData["displayName"] ? countryData["displayName"] : countryData["name"];
    _El.subTitle.innerText = stateName + countryName;

    _El.temperatureInfoPara.innerText = `${_tempDisplay(temp)} °F`;
    _El.temperatureInfoMinPara.innerText = `Min:\n${_tempDisplay(temp_min)}°F`
    _El.temperatureInfoMaxPara.innerText = `Max:\n${_tempDisplay(temp_max)}°F`
    _El.temperatureInfoFeelsLikePara.innerText = `Feels:\n${_tempDisplay(feels_like)}°F`

    _El.cloudsInfoImg.src = IconMap['cloudy']
    _El.cloudsInfoPara.innerText = `Cloud Coverage:\n${clouds.all}%`;

    let windMessage = `Wind Speed:\n${wind.speed}mph`;
    let windDirection;
    if(wind.deg){
      if((wind.deg >= 0 && wind.deg < 22.5) || wind.deg >= 337.5){
        windDirection = 'N';
      }
      else if(wind.deg >= 22.5 && wind.deg < 67.5){
        windDirection = 'NE';
      }
      else if(wind.deg >= 67.5 && wind.deg < 112.5){
        windDirection = 'E';
      }
      else if(wind.deg >= 112.5 && wind.deg < 157.5){
        windDirection = 'SE';
      }
      else if(wind.deg >= 157.5 && wind.deg < 202.5){
        windDirection = 'S';
      }
      else if(wind.deg >= 202.5 && wind.deg < 247.5){
        windDirection = 'SW';
      }
      else if(wind.deg >= 247.5 && wind.deg < 292.5){
        windDirection = 'W';
      }
      else {
        windDirection = 'NW';
      }
      windMessage += ` ${windDirection}`;
    }
    _El.windInfoImg.src = IconMap['windsock'];
    _El.windInfoPara.innerText = windMessage;

    let visibilityMessage = 'Visibility:\n';
    if(visibility < 1000){
      visibilityMessage += 'Very Poor';
    } else if(visibility >= 1000 && visibility < 2000){
      visibilityMessage += 'Poor';
    } else if(visibility >= 2000 && visibility < 4000){
      visibilityMessage += 'Hazy';
    } else {
      visibilityMessage += 'Clear';
    }
    _El.visibilityInfoImg.src = IconMap['binoculars'];
    _El.visibilityInfoPara.innerText = visibilityMessage;

    let humidityMessage = `Humidity:\n${humidity}%`;
    _El.humidityInfoImg.src = IconMap['humidity'];
    _El.humidityInfoPara.innerText = humidityMessage;
  }
  function _fahrenheitToCelcius(temp){
    return ((temp-32)(5/9)).toFixed(1);
  }
  function _tempDisplay(temp){
    return Number.parseFloat(temp).toFixed(1);
  }
  return {};
}
export default WeatherDisplay;