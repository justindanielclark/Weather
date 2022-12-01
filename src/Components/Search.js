import classes from "../Stylesheets/classes";
import magnifyingGlass from '../Assets/magnifyingGlass.svg';
import countryCodes from "../Data/countryCodes";

const Search = (root, props) => {
  const {getWeatherDataByLatitudeAndLongitude,getWeatherDataByCityName} = props;
  const _El = {
    container: document.createElement('div'),
    title: document.createElement('h2'),
    titleImg: document.createElement('img'),
    titleGroup: document.createElement('div'),
    optionsGroup: document.createElement('div'),
    optionLabelLatitudeAndLongitude: document.createElement('label'),
    optionRadioButtonLatitudeAndLongitude: document.createElement('input'),
    optionLabelCityName: document.createElement('label'),
    optionRadioButtonCityName: document.createElement('input'),
    inputGroup: document.createElement('div'),
    cityInputGroup: document.createElement('div'),
    inputCityName: document.createElement('input'),
    inputCountryName: document.createElement('select'),
    coordinateInputGroup: document.createElement('div'),
    inputLatitude: document.createElement('input'),
    inputLongitude: document.createElement('input'),
    button: document.createElement('button'),
  }
  const _latitudeLimits = {
    min: -90,
    max: 90,
  }
  const _longitudeLimits = {
    min: -180,
    max: 180,
  }
  let _lastCheckedRadio = _El.optionRadioButtonCityName;
  let _searchMode = 'CityName';
  let _visible = true;

  _init(root)

  function _init(root){
    _init_applyAttributes();
    _init_buildDOMTree();
    _wireHandlers();
    function _init_applyAttributes(){
      for(let element in _El){
        if(classes.search[element]){
          classes.add(_El[element], classes.search[element])
        }
      }
      classes.add(_El.container, classes.mixins.search.containerVisible);
      classes.add(_El.inputCityName, classes.search.input);
      classes.add(_El.inputCountryName, classes.search.input);
      classes.add(_El.cityInputGroup, classes.search.subInputGroup);
      classes.add(_El.coordinateInputGroup, classes.search.subInputGroup);
      classes.add(_El.inputLatitude, classes.search.input);
      classes.add(_El.inputLongitude, classes.search.input);
      classes.add(_El.optionLabelCityName, classes.search.label, classes.mixins.labelChecked)
      classes.add(_El.optionLabelLatitudeAndLongitude, classes.search.label, classes.mixins.labelUnchecked)
      classes.add(_El.optionRadioButtonCityName, classes.mixins.screenReaderOnly);
      classes.add(_El.optionRadioButtonLatitudeAndLongitude, classes.mixins.screenReaderOnly);

      _El.inputCityName.placeholder = 'City Name';

      _El.inputLatitude.placeholder = 'Latitude';
      _El.inputLatitude.type = 'number'
      _El.inputLatitude.min = -90;
      _El.inputLatitude.max = 90;

      _El.inputLongitude.placeholder = 'Longitude';
      _El.inputLongitude.type = 'number';
      _El.inputLongitude.min = -180;
      _El.inputLongitude.max = 180;

      _El.titleImg.src = magnifyingGlass;
      _El.title.innerText = 'Find Weather By:'
      _El.inputCityName.type = 'text';
      _El.optionLabelCityName.innerText = 'City Name';
      _El.optionLabelCityName.for = 'cityname';

      _El.optionRadioButtonCityName.type = 'radio';
      _El.optionRadioButtonCityName.checked = true;
      _El.optionRadioButtonCityName.id = 'cityname';
      _El.optionRadioButtonCityName.name = 'option';

      _El.optionLabelLatitudeAndLongitude.innerText = 'Latitude & Longitude';

      _El.optionRadioButtonLatitudeAndLongitude.type = 'radio';
      _El.optionRadioButtonLatitudeAndLongitude.checked = false;
      _El.optionRadioButtonLatitudeAndLongitude.id = 'latitudeandlongitude';
      _El.optionRadioButtonLatitudeAndLongitude.name = 'option';
  
      _El.button.innerText = 'Search';
    }
    function _init_buildDOMTree(){
      _El.inputCountryName.append()
      countryCodes.forEach(country => {
        const selectOption = document.createElement('option');
        selectOption.value = country.code;
        if(country.code === 'US'){
          selectOption.selected = true;
        }
        selectOption.innerText = country.name;
        _El.inputCountryName.append(selectOption);
      })

      _El.titleGroup.append(_El.titleImg, _El.title);
      _El.optionLabelCityName.append(
        _El.optionRadioButtonCityName
      );
      _El.optionLabelLatitudeAndLongitude.append(
        _El.optionRadioButtonLatitudeAndLongitude
      );
      _El.optionsGroup.append(
        _El.optionLabelCityName, 
        _El.optionLabelLatitudeAndLongitude
      );
      _El.cityInputGroup.append(
        _El.inputCityName,
        _El.inputCountryName,
      )
      _El.coordinateInputGroup.append(
        _El.inputLatitude,
        _El.inputLongitude,
      )
      _El.inputGroup.append(
        _El.cityInputGroup,
        _El.button
      );
      _El.container.append(
        _El.titleGroup, 
        _El.optionsGroup, 
        _El.inputGroup
      );
      root.append(_El.container);
    }
  }
  function _wireHandlers(){
    _El.optionRadioButtonCityName.addEventListener('click', _handleClick_toggleSearch);
    _El.optionRadioButtonLatitudeAndLongitude.addEventListener('click', _handleClick_toggleSearch)
    _El.inputLatitude.addEventListener('input', _handleChange_inputLatitude);
    _El.inputLongitude.addEventListener('input', _handleChange_inputLongitude);
    _El.button.addEventListener('click', _handleClick_searchButton);
    _El.container.addEventListener('animationend', _handleAnimationEnd_container);
  }
  function _handleChange_inputLatitude(){
    if(this.value < _latitudeLimits.min){
      this.value = _latitudeLimits.min;
    }
    if(this.value > _latitudeLimits.max){
      this.value = _latitudeLimits.max;
    }
  }
  function _handleChange_inputLongitude(){
    if(this.value < _longitudeLimits.min){
      this.value = _longitudeLimits.min;
    }
    if(this.value > _longitudeLimits.max){
      this.value = _longitudeLimits.max;
    }
  }
  function _handleClick_toggleSearch(){
    if(_lastCheckedRadio !== this){
      _lastCheckedRadio = this;
      _El.optionLabelCityName.classList.toggle(classes.mixins.labelChecked);
      _El.optionLabelCityName.classList.toggle(classes.mixins.labelUnchecked);
      _El.optionLabelLatitudeAndLongitude.classList.toggle(classes.mixins.labelChecked);
      _El.optionLabelLatitudeAndLongitude.classList.toggle(classes.mixins.labelUnchecked);
      if(this === _El.optionRadioButtonCityName){
        _El.inputGroup.removeChild(_El.coordinateInputGroup);
        _El.inputGroup.prepend(_El.cityInputGroup);
        _searchMode = 'CityName';
      } else {
        _El.inputGroup.removeChild(_El.cityInputGroup);
        _El.inputGroup.prepend(_El.coordinateInputGroup);
        _searchMode = 'Latitude&Longitude';
      }
    }
  }
  function _handleClick_searchButton(){
    if(_searchMode === 'CityName'){
      const cityName = _El.inputCityName.value;
      const countryCode = _El.inputCountryName.value;
      getWeatherDataByCityName(`${cityName}, ${countryCode}`);
    } else {
      getWeatherDataByLatitudeAndLongitude(_El.inputLatitude.value, _El.inputLongitude.value);
    }
  }
  function _handleAnimationEnd_container(event){
    const {animationName} = event;
    if(animationName === 'showSearch'){
      _visible = true;
      classes.remove(_El.container, classes.animations.search.showSearch);
      classes.add(_El.container, classes.mixins.search.containerVisible);
    }
    else {
      _visible = false;
      classes.remove(_El.container, classes.animations.search.hideSearch);
      classes.add(_El.container, classes.mixins.search.containerInvisible);
    }
  }
  function _toggleVisibility(){
    if(_visible){
      _visible = false;
      classes.remove(_El.container, classes.mixins.search.containerVisible);
      classes.add(_El.container, classes.animations.search.hideSearch);
    } else {
      _visible = true;
      classes.remove(_El.container, classes.mixins.search.containerInvisible)
      classes.add(_El.container, classes.animations.search.showSearch);
    }
  }
  return {
    _toggleVisibility
  }
}

export default Search;