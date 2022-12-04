import classes from "../Stylesheets/classes";
import countryCodes from "../Data/countryCodes";
import IconMap from "../Assets/IconMap";

const secondsInDay = 86400;

const WeatherDisplay = (props) => {
  const {root, showSearchView} = props;
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

    title: document.createElement('h1'),

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
    
    forecastContainer: document.createElement('div'),
    forecastTitle: document.createElement('h2'),
    forecastSlider: document.createElement('div'),

    backButton: document.createElement('button'),
  }
  _init();
  function _init(){
    _init_applyClasses();
    _init_buildDOMTree();
    _El.backButton.innerText = 'Return to Search';
    _El.backButton.addEventListener('click', showSearchView);
    _El.forecastTitle.innerText = 'Forecast:'
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
    function _init_buildDOMTree(){
      _El.container.append(_El.topContainer, _El.bottomContainer, _El.forecastContainer, _El.backButton);
      _El.topContainer.append(_El.weatherImg, _El.title, _El.temperatureInfoContainer);
      _El.temperatureInfoContainer.append(_El.temperatureInfoPara, _El.temperatureInfoBottomContainer);
      _El.temperatureInfoBottomContainer.append(_El.temperatureInfoMinPara, _El.temperatureInfoMaxPara, _El.temperatureInfoFeelsLikePara);
      _El.bottomContainer.append(_El.cloudsInfo, _El.windInfo, _El.visibilityInfo, _El.humidityInfo)
      _El.cloudsInfo.append(_El.cloudsInfoImg, _El.cloudsInfoPara);
      _El.windInfo.append(_El.windInfoImg, _El.windInfoPara);
      _El.visibilityInfo.append(_El.visibilityInfoImg, _El.visibilityInfoPara);
      _El.humidityInfo.append(_El.humidityInfoImg, _El.humidityInfoPara);
      _El.forecastContainer.append(_El.forecastTitle, _El.forecastSlider);
    }
  }
  function update(currentWeatherData, forecastWeatherData){
    const {name: cityName, timezone: timezoneOffset, dt: atTime} = currentWeatherData;
    const mainDisplaysDate = new Date((atTime+timezoneOffset)*1000).getDate();
    console.log(mainDisplaysDate);
    const {sunrise, sunset} = currentWeatherData.sys;
    _updateCurrentWeatherDisplay(_transformWeatherDatum(currentWeatherData));
    _updateForecastWeatherDisplay(forecastWeatherData, timezoneOffset, sunrise, sunset, mainDisplaysDate);
    function _updateCurrentWeatherDisplay(weatherDisplayData){
      console.log('Weather Display Data')
      console.log(weatherDisplayData);
      //Determine if Day or Night
      const dayOrNight = (weatherDisplayData.atTime >= sunrise && weatherDisplayData.atTime <= sunset) ? 'day' : 'night';
      //Icon
      _El.weatherImg.src = IconMap[_IconCodeSVGs[weatherDisplayData.weatherID][dayOrNight]];
      //Title
      _El.title.innerText = cityName;
      //Temp
      _El.temperatureInfoPara.innerText = `${_tempDisplay(weatherDisplayData.temp)} °F`;
      _El.temperatureInfoMinPara.innerText = `Min:\n${_tempDisplay(weatherDisplayData.temp_min)}°F`
      _El.temperatureInfoMaxPara.innerText = `Max:\n${_tempDisplay(weatherDisplayData.temp_max)}°F`
      _El.temperatureInfoFeelsLikePara.innerText = `Feels:\n${_tempDisplay(weatherDisplayData.feels_like)}°F`
      //Clouds
      _El.cloudsInfoImg.src = IconMap['cloudy']
      _El.cloudsInfoPara.innerText = `Cloud Coverage:\n${weatherDisplayData.clouds}%`;
      //Wind
      _El.windInfoImg.src = IconMap['windsock'];
      _El.windInfoPara.innerText = `Wind Speed:\n${weatherDisplayData.windSpeed}mph ${_determineWindDirection(weatherDisplayData.windDeg)}`;
      //Visibility
      _El.visibilityInfoImg.src = IconMap['binoculars'];
      _El.visibilityInfoPara.innerText = `Visibility:\n${_determineVisibility(weatherDisplayData.visibility)}`;
      //Humidity
      let humidityMessage = `Humidity:\n${weatherDisplayData.humidity}%`;
      _El.humidityInfoImg.src = IconMap['humidity'];
      _El.humidityInfoPara.innerText = humidityMessage;
    }
    function _updateForecastWeatherDisplay(forecastWeatherData, timezoneOffset, sunrise, sunset, displayDate){
      const dailySecondsShift = 86400;
      forecastWeatherData.list.forEach((weatherDatum) => {
        const weatherDisplayData = _transformWeatherDatum(weatherDatum);
        const time = new Date((weatherDisplayData.atTime+timezoneOffset)*1000);
        let todaysSunrise = sunrise + ((time.getDate()-displayDate)*dailySecondsShift);
        let todaysSunset = sunset + ((time.getDate()-displayDate)*dailySecondsShift);
        //Determine if Day or Night
        const dayOrNight = (weatherDisplayData.atTime >= todaysSunrise && weatherDisplayData.atTime <= todaysSunset) ? 'day' : 'night';
        //Build DOM
        const forecastSlide = document.createElement('div');
        const forecastImg = document.createElement('img');
        const forecastTime = document.createElement('p');
        const forecastTemp = document.createElement('p');
        const forecastTempMax = document.createElement('p');
        const forecastTempMin = document.createElement('p');
        const forecastTempFeelsLike = document.createElement('p');
        const forecastCloudInfo = document.createElement('p');
        const forecastWindInfo = document.createElement('p');
        const forecastVisibilityInfo = document.createElement('p');
        const forecastHumidityInfo = document.createElement('p');
        forecastSlide.append(
          forecastTime,
          forecastImg, 
          forecastTemp, 
          forecastTempMax, 
          forecastTempMin, 
          forecastTempFeelsLike,
          forecastCloudInfo,
          forecastWindInfo,
          forecastVisibilityInfo,
          forecastHumidityInfo,
        );
        _El.forecastSlider.append(forecastSlide);
        //Apply Classes
        classes.add(forecastSlide, classes.weatherDisplay.forecastSlide);
        classes.add(forecastTime, classes.weatherDisplay.forecastInfoTimeDisplay);
        classes.add(forecastTemp, classes.weatherDisplay.forecastInfo);
        classes.add(forecastTempMax, classes.weatherDisplay.forecastInfo);
        classes.add(forecastTempMin, classes.weatherDisplay.forecastInfo);
        classes.add(forecastTempFeelsLike, classes.weatherDisplay.forecastInfo);
        classes.add(forecastCloudInfo, classes.weatherDisplay.forecastInfo);
        classes.add(forecastWindInfo, classes.weatherDisplay.forecastInfo);
        classes.add(forecastVisibilityInfo, classes.weatherDisplay.forecastInfo);
        classes.add(forecastHumidityInfo, classes.weatherDisplay.forecastInfo);
        //Apply Data
        forecastImg.src = IconMap[_IconCodeSVGs[weatherDisplayData.weatherID][dayOrNight]];
        const hours = time.getHours();
        let hoursMessage
        if(hours-12 > 0){
          hoursMessage = (hours-12) + 'PM'
        } else {
          if(hours === 0) {hoursMessage = '12PM'}
          else{hoursMessage = hours + 'AM'}
        }
        forecastTime.innerText = hoursMessage
        forecastTemp.innerText = `${weatherDisplayData.temp}°F`;
        forecastTempMax.innerText = `${weatherDisplayData.temp_max}°F`;
        forecastTempMin.innerText = `${weatherDisplayData.temp_min}°F`;
        forecastTempFeelsLike.innerText = `${weatherDisplayData.feels_like}°F`;
        forecastCloudInfo.innerText = `${weatherDisplayData.clouds}%`;
        forecastWindInfo.innerText = `${weatherDisplayData.windSpeed} ${_determineWindDirection(weatherDisplayData.windDeg)}`
        forecastVisibilityInfo.innerText = _determineVisibility(weatherDisplayData.visibility)
        forecastHumidityInfo.innerText = `${weatherDisplayData.humidity}%` 
      })
    }
  }
  function _fahrenheitToCelcius(temp){
    return ((temp-32)(5/9)).toFixed(1);
  }
  function _determineWindDirection(windDeg){
    if(windDeg){
      if((windDeg >= 0 && windDeg < 22.5) || windDeg >= 337.5){
        return 'N';
      }
      else if(windDeg >= 22.5 && windDeg < 67.5){
        return 'NE';
      }
      else if(windDeg >= 67.5 && windDeg < 112.5){
        return 'E';
      }
      else if(windDeg >= 112.5 && windDeg < 157.5){
        return 'SE';
      }
      else if(windDeg >= 157.5 && windDeg < 202.5){
        return 'S';
      }
      else if(windDeg >= 202.5 && windDeg < 247.5){
        return 'SW';
      }
      else if(windDeg >= 247.5 && windDeg < 292.5){
        return 'W';
      }
      return 'NW';
    }
  }
  function _determineVisibility(visibility){
    if(visibility < 1000){
      return 'Very Poor';
    } else if(visibility >= 1000 && visibility < 2000){
      return 'Poor';
    } else if(visibility >= 2000 && visibility < 4000){
      return 'Hazy';
    } else {
      return 'Clear';
    }
  }
  function _tempDisplay(temp){
    return Number.parseFloat(temp).toFixed(1);
  }
  function append(){
    if(!Array.from(root.children).includes(_El.container)){
      root.append(_El.container);
    }
  }
  function remove(){
    if(Array.from(root.children).includes(_El.container)){
      root.removeChild(_El.container);
    }
  }
  function _transformWeatherDatum(weatherDatum){
    return {
      atTime: weatherDatum.dt,
      clouds: weatherDatum.clouds.all,
      temp: weatherDatum.main.temp,
      temp_max: weatherDatum.main.temp_max,
      temp_min: weatherDatum.main.temp_min,
      pressure: weatherDatum.main.pressure,
      humidity: weatherDatum.main.humidity,
      feels_like: weatherDatum.main.feels_like,
      visibility: weatherDatum.visibility,
      weatherID: weatherDatum.weather[0].id,
      weatherDescription: weatherDatum.weather[0].description,
      windDeg: weatherDatum.wind.deg,
      windSpeed: weatherDatum.wind.speed,
    }
  }
  return {
    append,
    remove,
    update,
  };
}
export default WeatherDisplay;