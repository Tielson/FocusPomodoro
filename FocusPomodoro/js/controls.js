export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      timer.resete()
      return false
    }
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}