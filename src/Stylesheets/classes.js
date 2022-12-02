const classes = {
  body: 'bg-zinc-800 p-4 flex flex-col justify-center items-center min-h-screen',
  viewContainer: 'flex flex-row max-w-sm w-full overflow-hidden items-center justify-start', //border border-red-500
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
    container: 'flex flex-col w-full text-neutral-100',
    titleContainer: 'flex flex-row items-center pb-2 border-b-2 border-neutral-100',
    titleImg: 'h-12 w-12 mx-2',
    title: 'text-xl font-bold self-end',
    citiesList: 'flex flex-col gap-2 mt-2',
    cityListItem: 'w-full',
    cityListItemButton: 'flex flex-row w-full items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-700 px-2 rounded-md transition-colors duration-300',
    listNumberingPara: 'pr-2 text-2xl',
    cityInfoContainer: 'flex flex-col flex-1 items-start',
    stateAndCountryPara: 'text-sm pl-3',
    cityNamePara: 'text-left',
    coordinatesContainer: 'flex flex-col justify-end',
    coordinate: 'text-xs text-right',
    backButton: 'self-end bg-green-700 hover:bg-green-800 transition-colors duration-300 py-1 px-2 rounded-lg mt-2',
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