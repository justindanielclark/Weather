const classes = {
  body: 'bg-zinc-800 p-4 flex flex-col justify-center items-center min-h-screen max-h-screen',
  search: {
    button: 'p-2 bg-slate-700 hover:bg-slate-800 rounded-r-lg text-slate-100 flex-initial',
    container: 'flex flex-col justify-center items-center max-w-sm w-full',
    inputGroup: 'flex flex-row max-w-full w-full justify-start align-center',
    input: 'p-2 outline-none focus:bg-slate-200 flex-auto min-w-0 max-w-full',
    inputCityName: 'rounded-bl-lg',
    inputLatitude: 'rounded-bl-lg outline-none',
    inputLongitude: 'outline-none',
    optionsGroup: 'flex flex-row w-full justify-start',
    optionLabelCityName: 'rounded-tl-lg',
    optionLabelLatitudeAndLongitude: 'rounded-tr-lg',
    title: 'text-neutral-100 text-2xl font-bold w-full',
    label: 'text-zinc-900 py-1 px-3 hover:bg-slate-400 border-b-2 border-slate-900 transition-colors duration-500',
  },
  mixins: {
    hidden: 'hidden',
    screenReaderOnly: 'sr-only',
    labelChecked: 'bg-slate-400',
    labelUnchecked: 'bg-slate-200',
  }
}
export default classes;