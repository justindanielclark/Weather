import classes from "../Stylesheets/classes";
const Search = (root, props) => {
  const _latitudeLimits = {
    min: -90,
    max: 90,
  }
  const _longitudeLimits = {
    min: -180,
    max: 180,
  }
  const _El = {
    container: document.createElement('div'),
    title: document.createElement('h2'),
    optionsGroup: document.createElement('div'),
    optionLabelLatitudeAndLongitude: document.createElement('label'),
    optionRadioButtonLatitudeAndLongitude: document.createElement('input'),
    optionLabelCityName: document.createElement('label'),
    optionRadioButtonCityName: document.createElement('input'),
    inputGroup: document.createElement('div'),
    inputCityName: document.createElement('input'),
    inputLatitude: document.createElement('input'),
    inputLongitude: document.createElement('input'),
    button: document.createElement('button'),
  }
  let lastCheckedRadio = _El.optionRadioButtonCityName;
  _init(root)
  function _init(root){
    _init_applyAttributes();
    _init_buildDOMTree();
    _init_wireHandlers();
    function _init_applyAttributes(){
      for(let element in _El){
        if(classes.search[element]){
          _El[element].classList.add(...classes.search[element].split(' '))
        }
      }
      _El.inputCityName.classList.add(
        ...classes.search.input.split(' '),
      )
      _El.inputCityName.placeholder = 'City, State, Country';
      _El.inputLatitude.classList.add(
        ...classes.search.input.split(' '),
      )
      _El.inputLatitude.placeholder = 'Latitude';
      _El.inputLatitude.type = 'number'
      _El.inputLatitude.min = -90;
      _El.inputLatitude.max = 90;

      _El.inputLongitude.classList.add(
        ...classes.search.input.split(' '),
      )
      _El.inputLongitude.placeholder = 'Longitude';
      _El.inputLongitude.type = 'number';
      _El.inputLongitude.min = -180;
      _El.inputLongitude.max = 180;

      _El.title.innerText = 'Find Weather By:'
      _El.inputCityName.type = 'text';
      _El.optionLabelCityName.innerText = 'City Name';
      _El.optionLabelCityName.for = 'cityname';
      _El.optionLabelCityName.classList.add(
        ...classes.search.label.split(' '),
        ...classes.mixins.labelChecked.split(' '),
      );
      _El.optionRadioButtonCityName.type = 'radio';
      _El.optionRadioButtonCityName.checked = true;
      _El.optionRadioButtonCityName.id = 'cityname';
      _El.optionRadioButtonCityName.name = 'option';
      _El.optionRadioButtonCityName.classList.add(
        ...classes.mixins.screenReaderOnly.split(' '),
      );
      _El.optionLabelLatitudeAndLongitude.innerText = 'Latitude & Longitude';
      _El.optionLabelLatitudeAndLongitude.classList.add(
        ...classes.search.label.split(' '),
        ...classes.mixins.labelUnchecked.split(' '),
      );
      _El.optionRadioButtonLatitudeAndLongitude.classList.add(
        ...classes.mixins.screenReaderOnly.split(' '),
      );
      _El.optionRadioButtonLatitudeAndLongitude.type = 'radio';
      _El.optionRadioButtonLatitudeAndLongitude.checked = false;
      _El.optionRadioButtonLatitudeAndLongitude.id = 'latitudeandlongitude';
      _El.optionRadioButtonLatitudeAndLongitude.name = 'option';
  
      _El.button.innerText = 'Search';
    }
    function _init_buildDOMTree(){
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
      _El.inputGroup.append(
        _El.inputCityName, 
        _El.button
      );
      _El.container.append(
        _El.title, 
        _El.optionsGroup, 
        _El.inputGroup
      );
      root.append(_El.container);
    }
    function _init_wireHandlers(){
      _El.optionRadioButtonCityName.addEventListener('click', _handleClick_toggleSearch);
      _El.optionRadioButtonLatitudeAndLongitude.addEventListener('click', _handleClick_toggleSearch)
      _El.inputLatitude.addEventListener('input', _handleChange_inputLatitude);
      _El.inputLongitude.addEventListener('input', _handleChange_inputLongitude);
    }
  }
  function _handleClick_toggleSearch(){
    if(lastCheckedRadio !== this){
      lastCheckedRadio = this;
      _El.optionLabelCityName.classList.toggle(classes.mixins.labelChecked);
      _El.optionLabelCityName.classList.toggle(classes.mixins.labelUnchecked);
      _El.optionLabelLatitudeAndLongitude.classList.toggle(classes.mixins.labelChecked);
      _El.optionLabelLatitudeAndLongitude.classList.toggle(classes.mixins.labelUnchecked);
      if(this === _El.optionRadioButtonCityName){
        _El.inputGroup.removeChild(_El.inputLatitude);
        _El.inputGroup.removeChild(_El.inputLongitude);
        _El.inputGroup.prepend(_El.inputCityName);
      } else {
        _El.inputGroup.removeChild(_El.inputCityName);
        _El.inputGroup.prepend(_El.inputLongitude);
        _El.inputGroup.prepend(_El.inputLatitude);
      }
    }
  }
  function _handleChange_inputLatitude(){
    console.log(this.value);
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
}

export default Search;