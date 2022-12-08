import classes from "../Stylesheets/classes";
import countryCodes from "../Data/countryCodes";
import IconMap from "../Assets/IconMap";

const CitiesDisplay = (props) => {
  const buttons = [];
  const {root, showSearchView, searchByCoordInfo} = props;
  const _El = {
    container: document.createElement('div'),
    titleContainer: document.createElement('div'),
    titleImg: document.createElement('img'),
    title: document.createElement('h2'),
    citiesList: document.createElement('ol'),
    backButton: document.createElement('button'),
  }
  _init();
  function _init(){
    _init_buildDOMTree();
    _init_applyClasses();
    _init_applyAttributes();
    _El.backButton.addEventListener('click', showSearchView);

    function _init_buildDOMTree(){
      _El.titleContainer.append(_El.titleImg, _El.title);
      _El.container.append(_El.titleContainer, _El.citiesList, _El.backButton);
    }
    function _init_applyAttributes(){
      _El.titleImg.src = IconMap.city;
      _El.title.innerText = 'Choose City From Results:';
      _El.backButton.innerText = 'Return to Search';
    }
    function _init_applyClasses(){
      for(let element in _El){
        if(classes.citiesDisplay[element]){
          classes.add(_El[element], classes.citiesDisplay[element]);
        }
      }
    }
  }
  function update(cityData){
    const countryData = countryCodes[countryCodes.findIndex(country => country.code === cityData[0].country)];
    const countryName = countryData["displayName"] ? countryData["displayName"] : countryData["name"];
    cityData.forEach((cityDatum, index) => {
      const cityListItem = document.createElement('li');
      const cityListItemButton = document.createElement('button');
      const listNumberingPara = document.createElement('p');
      const cityInfoContainer = document.createElement('div');
      const cityNamePara = document.createElement('p');
      const stateAndCountryPara = document.createElement('p')
      const coordinatesContainer = document.createElement('div');
      const latCordPara = document.createElement('p');
      const lonCordPara = document.createElement('p');
      
      classes.add(cityListItem, classes.citiesDisplay.cityListItem);
      classes.add(cityListItemButton, classes.citiesDisplay.cityListItemButton);
      classes.add(listNumberingPara, classes.citiesDisplay.listNumberingPara);
      classes.add(cityInfoContainer, classes.citiesDisplay.cityInfoContainer);
      classes.add(cityNamePara, classes.citiesDisplay.cityNamePara);
      classes.add(stateAndCountryPara, classes.citiesDisplay.stateAndCountryPara)
      classes.add(coordinatesContainer, classes.citiesDisplay.coordinatesContainer);
      classes.add(latCordPara, classes.citiesDisplay.coordinate);
      classes.add(lonCordPara, classes.citiesDisplay.coordinate);

      listNumberingPara.innerText = `${index+1}.`;
      cityNamePara.innerText = cityDatum.name;
      stateAndCountryPara.innerText = cityDatum.state ? `${cityDatum.state}, ${countryName}` : `${countryName}`;

      latCordPara.innerText = `Lat: ${Number.parseFloat(cityDatum.lat).toFixed(2)}`;
      lonCordPara.innerText = ` Lon: ${Number.parseFloat(cityDatum.lon).toFixed(2)}`;
      
      cityInfoContainer.append(cityNamePara, stateAndCountryPara);
      coordinatesContainer.append(latCordPara, lonCordPara);
      cityListItemButton.append(listNumberingPara, cityInfoContainer, coordinatesContainer)
      cityListItem.append(cityListItemButton);
      _El.citiesList.append(cityListItem);
      buttons.push(cityListItemButton);
      cityListItemButton.addEventListener('click', () => {
        buttons.forEach(button=>{
          button.disabled = true;
        })
        _El.backButton.innerText = 'Searching...';
        searchByCoordInfo(cityDatum.lat, cityDatum.lon)
      });
    })
  }
  function append(){
    if(!Array.from(root.children).includes(_El.container)){
      root.append(_El.container);
    }
  }
  function prepend(){
    if(!Array.from(root.children).includes(_El.container)){
      root.prepend(_El.container);
    }
  }
  function remove(){
    if(Array.from(root.children).includes(_El.container)){
      root.removeChild(_El.container);
    }
  }
  return {
    append,
    prepend,
    remove,
    update,
  }
}

export default CitiesDisplay