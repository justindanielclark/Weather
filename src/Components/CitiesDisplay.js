import classes from "../Stylesheets/classes";
import countryCodes from "../Data/countryCodes";

const CitiesDisplay = (props) => {
  const {root, cityData} = props;
  const _El = {
    container: document.createElement('div'),
    titleContainer: document.createElement('div'),
    titleImg: document.createElement('img'),
    title: document.createElement('h2'),
    citiesList: document.createElement('ol'),
  }
  _init();

  function _init(){
    _init_buildDOMTree();
    _init_applyClasses();
    _init_buildCitiesList();
    function _init_buildDOMTree(){
      _El.titleContainer.append(_El.titleImg, _El.title);
      _El.container.append(_El.titleContainer, _El.citiesList);
    }
    function _init_applyClasses(){
      for(let element in _El){
        if(classes.citiesDisplay[element]){
          classes.add(_El[element], classes.citiesDisplay[element])
        }
      }
    }
    function _init_buildCitiesList(){
      const countryData = countryCodes[countryCodes.findIndex(country => country.code === cityDatum.country)];
      const countryName = countryData["displayName"] ? countryData["displayName"] : countryData["name"];
      cityData.forEach((cityDatum, index) => {
        let CityNameText = cityDatum.name;
        if(cityDatum.state){
          CityNameText += ', ' + cityDatum.state;
        }
        CityNameText += ', ' + countryName;
        const cityListItem = document.createElement('li');
        const listNumberingPara = docuemnt.createElement('p');
        const cityNamePara = document.createElement('p');
        const coordinatesContainer = document.createElement('div');
        const latCordPara = document.createElement('p');
        const lonCordPara = document.createElement('p');
        
        classes.add(cityListItem, classes.citiesDisplay.cityListItem);
        classes.add(listNumberingPara, classes.citiesDisplay.listNumberingPara);
        classes.add(cityNamePara, classes.citiesDisplay.cityNamePara);
        classes.add(coordinatesContainer, classes.citiesDisplay.coordinatesContainer);
        classes.add(latCordPara, classes.citiesDisplay.coordinate);
        classes.add(lonCordPara, classes.citiesDisplay.coordinate);

        listNumberingPara.innerText = `${index}.`;
        cityNamePara.innerText = CityNameText;
        latCordPara.innerText = `(Lat: ${Number.parseFloat(cityDatum.lat).toFixed(2)},`;
        lonCordPara.innerText = ` Lon: ${Number.parseFloat(cityDatum.lon).toFixed(2)})`;
        
        coordinatesContainer.append(latCordPara, lonCordPara);
        cityListItem.append(listNumberingPara, cityNamePara, coordinatesContainer);
        _El.citiesList.append(cityListItem);
      })
    }
  }
  function append(){
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
    remove,
  }
}

export default CitiesDisplay