import classes from "../Stylesheets/classes";
import IconMap from "../Assets/IconMap";
const WeatherDisplay = (props) => {
  const {root, showSearchView, toggleDisplayUnits} = props;
  let {displayUnits} = props;
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

    weatherDetailsContainer: document.createElement('div'),
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
    forecastTableContainer: document.createElement('div'),
    forecastTitle: document.createElement('h2'),
    forecastTable: document.createElement('table'),
    forecastRowDayOfWeek: document.createElement('tr'),
    forecastDayOfWeekLabel: document.createElement('th'),
    forecastRowTime : document.createElement('tr'),
    forecastTimeLabel: document.createElement('th'),
    forecastRowImg : document.createElement('tr'),
    forecastImgLabel: document.createElement('td'),
    forecastRowTemp : document.createElement('tr'),
    forecastTempLabel: document.createElement('td'),
    forecastRowTempMax : document.createElement('tr'),
    forecastTempMaxLabel: document.createElement('td'),
    forecastRowTempMin : document.createElement('tr'),
    forecastTempMinLabel: document.createElement('td'),
    forecastRowTempFeelsLike : document.createElement('tr'),
    forecastTempFeelsLikeLabel: document.createElement('td'),
    forecastRowCloud : document.createElement('tr'),
    forecastCloudLabel: document.createElement('td'),
    forecastCloudLabelImg: document.createElement('img'),
    forecastRowWind : document.createElement('tr'),
    forecastWindLabel: document.createElement('td'),
    forecastWindLabelImg: document.createElement('img'),
    forecastRowVisibility : document.createElement('tr'),
    forecastVisibilityLabel: document.createElement('td'),
    forecastVisibilityLabelImg: document.createElement('img'),
    forecastRowHumidity : document.createElement('tr'),
    forecastHumidityLabel: document.createElement('td'),
    forecastHumidityLabelImg: document.createElement('img'),

    controlsContainer: document.createElement('div'),
    toggleUnitsButton: document.createElement('button'),
    backButton: document.createElement('button'),
  }
  const _forecastColToggleUnitsFunctionList = [];
  _init();
  function _init(){
    _init_applyClasses();
    _init_buildDOMTree();
    _El.backButton.innerText = 'Return to Search';
    _El.toggleUnitsButton.innerText = (displayUnits === 'Imperial') ? 'Switch to Metric' : 'Switch to Imperial';
    _El.forecastTitle.innerText = 'Forecast:'
    _El.forecastDayOfWeekLabel.innerText = ''
    _El.forecastTimeLabel.innerText = ''
    _El.forecastImgLabel.innerText = ''
    _El.forecastTempLabel.innerText = 'Temp'
    _El.forecastTempMaxLabel.innerText = 'Max'
    _El.forecastTempMinLabel.innerText = 'Min'
    _El.forecastTempFeelsLikeLabel.innerText = 'Feels'
    _El.forecastCloudLabelImg.src = IconMap['cloudy']
    _El.forecastWindLabelImg.src = IconMap['windsock']
    _El.forecastVisibilityLabelImg.src = IconMap['binoculars']
    _El.forecastHumidityLabelImg.src = IconMap['humidity']
    _El.backButton.addEventListener('click', showSearchView);
    _El.toggleUnitsButton.addEventListener('click', ()=>{
      if(displayUnits === 'Metric'){
        displayUnits = 'Imperial';
        _El.toggleUnitsButton.innerText = 'Switch to Metric';
      } else {
        displayUnits = 'Metric';
        _El.toggleUnitsButton.innerText = 'Switch to Imperial';
      }
      toggleDisplayUnits()
      _forecastColToggleUnitsFunctionList.forEach(funcObj => {
        funcObj[displayUnits]();
      })
    });
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
      classes.add(_El.visibilityInfoImg, classes.weatherDisplay.infoImg, classes.mixins.scaleDown);
      classes.add(_El.humidityInfoImg, classes.weatherDisplay.infoImg, classes.mixins.scaleUp);
      classes.add(_El.cloudsInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.windInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.visibilityInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.humidityInfoPara, classes.weatherDisplay.infoPara);
      classes.add(_El.forecastRowDayOfWeek, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastDayOfWeekLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowTime, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastTimeLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowImg, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastImgLabel, classes.weatherDisplay.tableLabelForImg);
      classes.add(_El.forecastRowTemp, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastTempLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowTempMax, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastTempMaxLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowTempMin, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastTempMinLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowTempFeelsLike, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastTempFeelsLikeLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowCloud, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastCloudLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowWind, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastWindLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowVisibility, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastVisibilityLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastRowHumidity, classes.weatherDisplay.tableRow);
      classes.add(_El.forecastHumidityLabel, classes.weatherDisplay.tableLabel);
      classes.add(_El.forecastCloudLabelImg, classes.weatherDisplay.tableLabelImg);
      classes.add(_El.forecastHumidityLabelImg, classes.weatherDisplay.tableLabelImg, classes.mixins.scaleUp);
      classes.add(_El.forecastVisibilityLabelImg, classes.weatherDisplay.tableLabelImg, classes.mixins.scaleDown);
      classes.add(_El.forecastWindLabelImg, classes.weatherDisplay.tableLabelImg);
    }
    function _init_buildDOMTree(){
      _El.container.append(_El.topContainer, _El.weatherDetailsContainer, _El.forecastContainer, _El.controlsContainer);
      _El.topContainer.append(_El.weatherImg, _El.title, _El.temperatureInfoContainer);
      _El.temperatureInfoContainer.append(_El.temperatureInfoPara, _El.temperatureInfoBottomContainer);
      _El.temperatureInfoBottomContainer.append(_El.temperatureInfoMinPara, _El.temperatureInfoMaxPara, _El.temperatureInfoFeelsLikePara);
      _El.weatherDetailsContainer.append(_El.cloudsInfo, _El.windInfo, _El.visibilityInfo, _El.humidityInfo);
      _El.controlsContainer.append(_El.toggleUnitsButton, _El.backButton);
      _El.cloudsInfo.append(_El.cloudsInfoImg, _El.cloudsInfoPara);
      _El.windInfo.append(_El.windInfoImg, _El.windInfoPara);
      _El.visibilityInfo.append(_El.visibilityInfoImg, _El.visibilityInfoPara);
      _El.humidityInfo.append(_El.humidityInfoImg, _El.humidityInfoPara);
      _El.forecastContainer.append(_El.forecastTitle, _El.forecastTableContainer);
      _El.forecastTableContainer.append(_El.forecastTable);
      _El.forecastTable.append(
        _El.forecastRowDayOfWeek,
        _El.forecastRowTime,
        _El.forecastRowImg,
        _El.forecastRowTemp,
        _El.forecastRowTempMax,
        _El.forecastRowTempMin,
        _El.forecastRowTempFeelsLike,
        _El.forecastRowCloud,
        _El.forecastRowWind,
        _El.forecastRowVisibility,
        _El.forecastRowHumidity,
      );
      _El.forecastRowDayOfWeek.append(_El.forecastDayOfWeekLabel);
      _El.forecastRowTime.append(_El.forecastTimeLabel);
      _El.forecastRowImg.append(_El.forecastImgLabel);
      _El.forecastRowTemp.append(_El.forecastTempLabel);
      _El.forecastRowTempMax.append(_El.forecastTempMaxLabel);
      _El.forecastRowTempMin.append(_El.forecastTempMinLabel);
      _El.forecastRowTempFeelsLike.append(_El.forecastTempFeelsLikeLabel);
      _El.forecastRowCloud.append(_El.forecastCloudLabel);
      _El.forecastCloudLabel.append(_El.forecastCloudLabelImg);
      _El.forecastRowWind.append(_El.forecastWindLabel);
      _El.forecastWindLabel.append(_El.forecastWindLabelImg);
      _El.forecastRowVisibility.append(_El.forecastVisibilityLabel);
      _El.forecastVisibilityLabel.append(_El.forecastVisibilityLabelImg)
      _El.forecastRowHumidity.append(_El.forecastHumidityLabel);
      _El.forecastHumidityLabel.append(_El.forecastHumidityLabelImg);
    }
  }
  function update(currentWeatherData, forecastWeatherData){
    const {name: cityName, timezone, dt: currentTime, coord} = currentWeatherData;
    const {sunrise, sunset} = currentWeatherData.sys;
    const currentDay = new Date((currentTime+timezone)*1000).getDay();
    const sunriseTime = new Date((sunrise+timezone)*1000);
    const sunsetTime = new Date((sunset+timezone)*1000);
    const sunriseVal = (sunriseTime.getUTCHours()*60)+(sunriseTime.getUTCMinutes());
    const sunsetVal = (sunsetTime.getUTCHours()*60)+(sunsetTime.getUTCMinutes());
    _updateCurrentWeatherDisplay(_transformWeatherDatum(currentWeatherData), cityName, coord, sunrise, sunset);
    _updateForecastWeatherDisplay(forecastWeatherData, timezone, sunriseVal, sunsetVal, currentDay);
  }
  function _updateCurrentWeatherDisplay(weatherDisplayData, cityName, coord, sunrise, sunset){
    const updateWithImperialUnits = () => {
      //Temp
      _El.temperatureInfoPara.innerText = `${_tempDisplay(weatherDisplayData.temp)} °F`;
      _El.temperatureInfoMinPara.innerText = `Min:\n${_tempDisplay(weatherDisplayData.temp_min)}°F`
      _El.temperatureInfoMaxPara.innerText = `Max:\n${_tempDisplay(weatherDisplayData.temp_max)}°F`
      _El.temperatureInfoFeelsLikePara.innerText = `Feels:\n${_tempDisplay(weatherDisplayData.feels_like)}°F`
      _El.windInfoPara.innerText = `Wind Speed:\n${weatherDisplayData.windSpeed.toFixed(1)} mph ${_determineWindDirection(weatherDisplayData.windDeg)}`;
    }
    const updateWithMetricUnits = () => {
      _El.temperatureInfoPara.innerText = `${_fahrenheitToCelcius(weatherDisplayData.temp)} °C`;
      _El.temperatureInfoMinPara.innerText = `Min:\n${_fahrenheitToCelcius(weatherDisplayData.temp_min)}°C`
      _El.temperatureInfoMaxPara.innerText = `Max:\n${_fahrenheitToCelcius(weatherDisplayData.temp_max)}°C`
      _El.temperatureInfoFeelsLikePara.innerText = `Feels:\n${_fahrenheitToCelcius(weatherDisplayData.feels_like)}°C`
      _El.windInfoPara.innerText = `Wind Speed:\n${_mphToKmph(weatherDisplayData.windSpeed).toFixed(1)} kmph ${_determineWindDirection(weatherDisplayData.windDeg)}`;
    }
    if(displayUnits === 'Imperial'){
    updateWithImperialUnits(); 
    } else {
      updateWithMetricUnits();
    }
    _forecastColToggleUnitsFunctionList.push({
      Imperial: updateWithImperialUnits, 
      Metric: updateWithMetricUnits,
    })
    //Determine if Day or Night
    const dayOrNight = (weatherDisplayData.atTime >= sunrise && weatherDisplayData.atTime <= sunset) ? 'day' : 'night';
    //Icon
    _El.weatherImg.src = IconMap[_IconCodeSVGs[weatherDisplayData.weatherID][dayOrNight]];
    //Title
    if(cityName === ''){
      _El.title.innerText = `(${coord.lat > 0 ? `${coord.lat.toFixed(1)} N` : `${Math.abs(coord.lat.toFixed(1))} S`} , ${coord.lon > 0 ? `${coord.lon.toFixed(1)} E` : `${Math.abs(coord.lon.toFixed(1))} W`})`
    }
    else {
      _El.title.innerText = cityName
    }
     (cityName === '') ? `(${coord.lat}, ${coord.lon})`: cityName;
    //Clouds
    _El.cloudsInfoImg.src = IconMap['cloudy']
    _El.cloudsInfoPara.innerText = `Cloud Coverage:\n${weatherDisplayData.clouds}%`;
    //Wind
    _El.windInfoImg.src = IconMap['windsock'];
    //Visibility
    _El.visibilityInfoImg.src = IconMap['binoculars'];
    _El.visibilityInfoPara.innerText = `Visibility:\n${_determineVisibility(weatherDisplayData.visibility)}`;
    //Humidity
    let humidityMessage = `Humidity:\n${weatherDisplayData.humidity}%`;
    _El.humidityInfoImg.src = IconMap['humidity'];
    _El.humidityInfoPara.innerText = humidityMessage;
  }
  function _updateForecastWeatherDisplay(forecastWeatherData, timezone, sunriseVal, sunsetVal, currentDay){
    const days = {};
    let dayIndex = currentDay;
    forecastWeatherData.list.forEach((weatherDatum) => {
      const weatherDisplayData = _transformWeatherDatum(weatherDatum);
      const time = new Date((weatherDisplayData.atTime+timezone)*1000);
      const day = time.getDay().toString();
      if(days[day]){
        days[day].push({weatherDisplayData, time})
      } else {
        days[day] = [{weatherDisplayData, time}]
      }
    })
    for(let i = 0; i < 7; i++){
      const consideredDay = (dayIndex+i)%7
      if(days[consideredDay]){
        const dayOfWeekTableHeader = document.createElement('th');
        dayOfWeekTableHeader.innerText = _getDayOfWeek(consideredDay)
        dayOfWeekTableHeader.colSpan = days[consideredDay].length
        classes.add(dayOfWeekTableHeader, classes.weatherDisplay.tableHeaderDayData);
        _El.forecastRowDayOfWeek.append(dayOfWeekTableHeader)
        days[consideredDay].forEach(entry=> {
          const {weatherDisplayData, time} = entry
          const timeVal = (time.getUTCHours()*60)+(time.getUTCMinutes());
          const dayOrNight = (timeVal >= sunriseVal && timeVal <= sunsetVal) ? 'day' : 'night';
          const hours = time.getUTCHours();
          let hoursMessage
          if(hours-12 > 0){
            hoursMessage = (hours-12) + 'PM'
          } else {
            if(hours === 0) {hoursMessage = '12PM'}
            else{hoursMessage = hours + 'AM'}
          }
          //Build DOM
          const timeHeader = document.createElement('th');
          _El.forecastRowTime.append(timeHeader);
          const weatherData = document.createElement('td');
          const weatherImg = document.createElement('img');
          weatherImg.src = IconMap[_IconCodeSVGs[weatherDisplayData.weatherID][dayOrNight]];
          weatherData.append(weatherImg);
          _El.forecastRowImg.append(weatherData);
          const tempData = document.createElement('td');
          _El.forecastRowTemp.append(tempData);
          const maxData = document.createElement('td');
          _El.forecastRowTempMax.append(maxData);
          const minData = document.createElement('td');
          _El.forecastRowTempMin.append(minData);
          const feelsData = document.createElement('td');
          _El.forecastRowTempFeelsLike.append(feelsData);
          const cloudData = document.createElement('td');
          _El.forecastRowCloud.append(cloudData);
          const windData = document.createElement('td');
          _El.forecastRowWind.append(windData);
          const visibilityData = document.createElement('td');
          _El.forecastRowVisibility.append(visibilityData);
          const humidityData = document.createElement('td');
          _El.forecastRowHumidity.append(humidityData);
          //Apply Classes
          classes.add(timeHeader, classes.weatherDisplay.tableHeaderData)
          classes.add(weatherData, classes.weatherDisplay.tableDataWeatherImg)
          classes.add(weatherImg, classes.weatherDisplay.tableWeatherImg)
          classes.add(tempData, classes.weatherDisplay.tableData)
          classes.add(maxData, classes.weatherDisplay.tableData)
          classes.add(minData, classes.weatherDisplay.tableData)
          classes.add(feelsData, classes.weatherDisplay.tableData)
          classes.add(cloudData, classes.weatherDisplay.tableData)
          classes.add(windData, classes.weatherDisplay.tableData)
          classes.add(visibilityData, classes.weatherDisplay.tableData)
          classes.add(humidityData, classes.weatherDisplay.tableData)


          //Apply Data
          const updateWithImperialUnits = () => {
            tempData.innerText = `${weatherDisplayData.temp.toFixed(1)} °F`
            maxData.innerText = `${weatherDisplayData.temp_min.toFixed(1)} °F`;
            minData.innerText = `${weatherDisplayData.temp_max.toFixed(1)} °F`;
            feelsData.innerText = `${weatherDisplayData.feels_like.toFixed(1)} °F`;
            windData.innerText = `${weatherDisplayData.windSpeed.toFixed(1)} ${_determineWindDirection(weatherDisplayData.windDeg)}`;
          }
          const updateWithMetricUnits = () => {
            tempData.innerText = `${_fahrenheitToCelcius(weatherDisplayData.temp)} °C`;
            maxData.innerText = `${_fahrenheitToCelcius(weatherDisplayData.temp)} °C`;
            minData.innerText = `${_fahrenheitToCelcius(weatherDisplayData.temp)} °C`;
            feelsData.innerText = `${_fahrenheitToCelcius(weatherDisplayData.temp)} °C`;
            windData.innerText = `${_mphToKmph(weatherDisplayData.windSpeed).toFixed(1)} ${_determineWindDirection(weatherDisplayData.windDeg)}`;
          }
          if(displayUnits === 'Imperial'){
           updateWithImperialUnits(); 
          } else {
            updateWithMetricUnits();
          }
          _forecastColToggleUnitsFunctionList.push({
            Imperial: updateWithImperialUnits, 
            Metric: updateWithMetricUnits,
          })
          timeHeader.innerText = hoursMessage;
          cloudData.innerText = `${weatherDisplayData.clouds}%`;
          visibilityData.innerText = `${_determineVisibility(weatherDisplayData.visibility)}`;
          humidityData.innerText = `${weatherDisplayData.humidity}%`;
        })
      }
    }
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
  function _getDayOfWeek(number){
    switch(number){
      case 0: {
        return 'Sun';
        break;
      }
      case 1: {
        return 'Mon';
        break;
      }
      case 2: {
        return 'Tues';
        break;
      }
      case 3: {
        return 'Wed';
        break;
      }
      case 4: {
        return 'Thur';
        break;
      }
      case 5: {
        return 'Fri';
        break;
      }
      case 6: {
        return 'Sat';
        break;
      }
    }
  }
  function _fahrenheitToCelcius(temp){
    return ((temp-32)*(5/9)).toFixed(1);
  }
  function _mphToKmph(speed){
    return speed * 1.60934;
  }
  function _determineWindDirection(windDeg){
    if(windDeg !== undefined){
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
  return {
    append,
    remove,
    update,
  };
}
export default WeatherDisplay;