const classes = {
  body: 'bg-zinc-800 p-4 flex flex-col justify-center items-center min-h-screen',
  viewContainer: 'flex flex-row max-w-sm w-full overflow-hidden border border-red-500 items-center justify-start',
  search: {
    button: 'bg-green-800 hover:bg-green-700 rounded-b-lg text-slate-100 w-full h-10',
    container: 'flex flex-col justify-center items-center w-full',
    inputGroup: 'flex flex-row w-full max-w-full justify-start align-center',
    subInputGroup: 'flex flex-col flex-1',
    input: 'p-2 outline-none focus:bg-slate-300 w-full h-10 max-h-10 min-h-10 transition-colors duration-300',
    inputCityName: '',
    inputCountryName: '',
    inputLatitude: '',
    inputLongitude: '',
    optionsGroup: 'flex flex-row w-full justify-start pr-16',
    optionLabelCityName: 'rounded-tl-lg',
    optionLabelLatitudeAndLongitude: 'rounded-tr-lg',
    titleGroup: 'flex flex-row justify-start w-full items-center py-2',
    title: 'text-neutral-100 text-2xl font-bold w-full',
    titleImg: 'w-8 h-8 mr-2 -scale-x-100',
    label: 'text-zinc-900 py-1 px-3 hover:bg-slate-400 border-b-2 border-slate-900 transition-colors duration-500 grow text-sm',
    warningNote: 'h-10 w-full text-red-300 flex items-center pl-2 invisible'
  },
  weatherDisplay: {
    container: 'flex flex-col w-full',
    topContainer: 'flex flex-row items-center border-b-2 border-neutral-100 py-2',
    weatherImg: 'h-16 w-16',
    cityInfoContainer: 'flex flex-col',
    title: 'text-neutral-100 text-xl font-bold',
    subTitle: 'text-xs text-neutral-200 pl-2',
    temperatureInfoContainer: 'flex flex-col flex-1 justify-end',
    temperatureInfoPara: 'text-2xl text-neutral-100 font-bold text-right',
    temperatureInfoBottomContainer: 'flex flex-row gap-2 justify-end',
    temperatureInfo: 'text-xs text-neutral-100',
    bottomContainer: 'flex flex-row items-center justify-between my-4 flex-wrap',
    infoContainer: 'flex flex-row basis-1/2 items-center px-4',
    infoImg: 'h-12 w-12',
    infoPara: 'text-xs text-neutral-100 text-center flex-1',
  },
  citiesDisplay: {
    container: 'flex flex-col w-full',
    titleContainer: 'flex flex-row',
    titleImg: 'h-8 w-8',
    title: 'text-xl font-bold',
    citiesList: 'flex flex-col',
    cityListItem: 'flex flex-row',
    listNumberingPara: 'text-lg text-neutral-100',
    cityNamePara: 'text-neutral-100',
    coordinatesContainer: 'flex flex-row',
    coordinate: 'text-sm',
  },
  mixins: {
    hidden: 'hidden',
    screenReaderOnly: 'sr-only',
    labelChecked: 'bg-slate-400',
    labelUnchecked: 'bg-slate-200',
    search: {
      addlBottomMargin: 'mb-10',
    }
  },
  animations: {

  },
  add: function(element, ...classes){
    const toApply = classes.join(' ');
    element.classList.add(...toApply.split(' '));
  },
  remove: function(element, ...classes){
    const toRemove = classes.join(' ');
    element.classList.remove(...toRemove.split(' '));
  }
}
export default classes;