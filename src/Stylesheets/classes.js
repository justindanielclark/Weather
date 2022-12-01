const classes = {
  body: 'bg-zinc-800 p-4 flex flex-col justify-center items-center min-h-screen',
  search: {
    button: 'p-2 bg-slate-700 hover:bg-slate-800 rounded-r-lg text-slate-100 flex-initial w-16',
    container: 'flex flex-col justify-center items-center max-w-sm w-full pl-8 overflow-hidden',
    inputGroup: 'flex flex-row max-w-full justify-start align-center',
    subInputGroup: 'flex flex-col',
    input: 'p-2 outline-none focus:bg-slate-200 flex-auto min-w-0 w-64',
    inputCityName: '',
    inputCountryName: 'rounded-bl-lg text-sm py-3',
    inputLatitude: '',
    inputLongitude: 'rounded-bl-lg',
    optionsGroup: 'flex flex-row w-full justify-start pl-4 pr-20',
    optionLabelCityName: 'rounded-tl-lg',
    optionLabelLatitudeAndLongitude: 'rounded-tr-lg',
    titleGroup: 'flex flex-row justify-start w-full items-center p-1',
    title: 'text-neutral-100 text-2xl font-bold w-full',
    titleImg: 'w-8 h-8 mr-2 -scale-x-100',
    label: 'text-zinc-900 py-1 px-3 hover:bg-slate-400 border-b-2 border-slate-900 transition-colors duration-500 grow text-sm',
  },
  weatherDisplay: {
    container: 'flex flex-col max-w-sm w-full',
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
  mixins: {
    hidden: 'hidden',
    screenReaderOnly: 'sr-only',
    labelChecked: 'bg-slate-400',
    labelUnchecked: 'bg-slate-200',
    buttonInactive: '', //todo
    buttonActive: '', //todo
    search: {
      containerVisible: 'max-h-40',
      containerInvisible: 'max-h-0',
    }
  },
  animations: {
    search: {
      showSearch: 'animate-showSearch',
      hideSearch: 'animate-hideSearch',
    }
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