import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sound.js"
import {buttonPause,buttonStop,buttonPlay,buttonSet,minutesDisplay,secondsDisplay}from "./elementes.js"
import Events from "./events.js"


const sound = Sound()
const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons: controls.reset,
})

Events({controls, sound,timer}) 

