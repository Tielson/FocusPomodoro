import {buttonStop,
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSondOff,
  buttonSondOn,
 } from "./elementes.js"
export default function  ({
  controls,
  timer, 
  sound
}) {
  

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countDown()
  sound.pressButton()
  sound.bgAudio

})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

buttonStop.addEventListener('click', function () {
  timer.resete()
  controls.reset()
  sound.pressButton()
})

buttonSondOn.addEventListener('click', function () {
  buttonSondOn.classList.add('hide')
  buttonSondOff.classList.remove('hide')
  sound.pressButton()
  sound.bgAudio.pause()
})

buttonSondOff.addEventListener('click', function () {
  buttonSondOff.classList.add('hide')
  buttonSondOn.classList.remove('hide')
  sound.bgAudio.play()
  sound.pressButton()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.resete()
    return
  }
  newMinutes

  timer.updateDisplay(newMinutes, "0")
  timer.updateMinutes(newMinutes)

})
}