const classes = {
  body: 'bg-zinc-800 p-4 flex flex-col justify-center items-center min-h-screen',
  viewContainer: 'max-w-sm w-full overflow-hidden items-center justify-start', //border border-red-500
  slideContainer: 'flex flex-row flex-nowrap w-full max-w-full min-w-full items-center',
  search: {
    container: 'flex flex-col justify-center items-center w-full basis-full shrink-0 grow-0 p-2',
    button: 'relative bg-green-800 hover:bg-green-700 rounded-b-lg text-slate-100 h-10 w-full border-t-2 border-zinc-900',
    inputGroup: 'flex flex-row w-full max-w-full justify-start align-center',
    subInputGroup: 'flex flex-col flex-1',
    input: 'p-2 outline-none focus:bg-slate-300 w-full h-10 max-h-10 min-h-10 transition-colors duration-300',
    inputCityName: '',
    inputCountryName: '',
    inputLatitude: '',
    inputLongitude: '',
    optionsGroup: 'flex flex-row w-full justify-start border-b-2 border-zinc-900',
    optionLabelCityName: 'rounded-tl-lg',
    optionLabelLatitudeAndLongitude: 'rounded-tr-lg',
    titleGroup: 'flex flex-row justify-start w-full items-center py-2',
    title: 'text-neutral-100 text-2xl font-bold w-full',
    titleImg: 'w-8 h-8 mr-2 -scale-x-100',
    label: 'text-zinc-900 py-1 px-3 hover:bg-slate-400 transition-colors duration-500 grow text-sm',
    warningNote: 'h-10 w-full text-red-300 flex items-center pl-2'
  },
  weatherDisplay: {
    container: 'flex flex-col w-full basis-full shrink-0 grow-0 p-2 text-neutral-100',
    topContainer: 'flex flex-row items-center border-b-2 border-neutral-100 py-2',
    weatherImg: 'h-16 w-16',
    title: 'text-xl font-bold',
    temperatureInfoContainer: 'flex flex-col flex-1 justify-end',
    temperatureInfoPara: 'text-2xl font-bold text-right',
    temperatureInfoBottomContainer: 'flex flex-row gap-2 justify-end',
    temperatureInfo: 'text-xs text-neutral-100',
    weatherDetailsContainer: 'flex flex-row items-center justify-between my-4 flex-wrap',
    infoContainer: 'flex flex-row basis-1/2 items-center px-4',
    infoImg: 'h-12 w-12',
    infoPara: 'text-xs text-center flex-1',
    controlsContainer: 'flex flex-row justify-between',
    toggleUnitsButton: 'bg-green-700 hover:bg-green-800 transition-colors duration-300 py-1 px-2 rounded-lg',
    backButton: 'bg-green-700 hover:bg-green-800 transition-colors duration-300 py-1 px-2 rounded-lg',
    forecastTitle: 'text-xl font-bold border-b-2 border-neutral-100',
    forecastTable: 'w-max',
    forecastContainer: 'w-full mb-2',
    forecastTableContainer: 'w-full overflow-x-scroll overflow-y-hidden',
    tableRow: 'tableRow even:bg-zinc-700',
    tableHeaderDayData: 'even:bg-slate-700 odd:bg-slate-800 border-r-2 border-b-2 border-neutral-100 last:border-r-0',
    tableHeaderData: 'font-bold text-sm w-14 last:border-r-0 border-r-2 border-neutral-100 pr-1',
    tableData: 'text-sm text-right last:border-r-0 border-r-2 border-neutral-100 pr-1',
    tableDataWeatherImg: 'w-20 h-20 last:border-r-0 border-r-2 border-neutral-100 pr-1',
    tableWeatherImg: 'w-full h-full',
    tableLabel: 'bg-slate-800 sticky left-0 flex items-center justify-center text-sm h-8 w-14 font-bold',
    tableLabelForImg: 'bg-slate-800 sticky left-0 flex items-center justify-center text-sm h-20 w-14 font-bold',
    tableLabelImg: 'h-10 w-10',
  },
  citiesDisplay: {
    container: 'flex flex-col text-neutral-100 w-full basis-full shrink-0 grow-0 p-2',
    titleContainer: 'flex flex-row items-center pb-2 border-b-2 border-neutral-100',
    titleImg: 'h-12 w-12 mx-2',
    title: 'text-xl font-bold self-end',
    citiesList: 'flex flex-col gap-2 my-2',
    cityListItem: 'w-full',
    cityListItemButton: 'flex flex-row w-full items-center bg-zinc-900 border border-zinc-700 hover:bg-zinc-700 px-2 rounded-md transition-colors duration-300',
    listNumberingPara: 'pr-2 text-2xl',
    cityInfoContainer: 'flex flex-col flex-1 items-start',
    stateAndCountryPara: 'text-sm pl-3',
    cityNamePara: 'text-left',
    coordinatesContainer: 'flex flex-col justify-end',
    coordinate: 'text-xs text-right',
    backButton: 'bg-green-700 hover:bg-green-800 transition-colors duration-300 py-1 px-2 rounded-lg',
  },
  mixins: {
    hidden: 'hidden',
    visible: 'opacity-100',
    invisible: 'opacity-0',
    screenReaderOnly: 'sr-only',
    labelChecked: 'bg-slate-400',
    labelUnchecked: 'bg-slate-200',
    search: {
      addlBottomMargin: 'mb-10',
    },
    scaleDown: 'scale-75',
    scaleUp: 'scale-125'
  },
  animations: {
    slideLeft: 'animate-slideLeft',
    slideRight: 'animate-slideRight',
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