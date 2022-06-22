import Sound from "./sound.js"
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons,
}) {
   

  const sound = Sound()
  let timerTimerOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resete() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
  }

  function countDown() {
    timerTimerOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = (minutes <= 0) && (seconds <= 0)


      if (isFinished) {
        resetButtons()
        updateDisplay()
        sound.timeEnd()
        if (seconds >= 1) {
          secondsDisplay.textContent = (seconds - 1)
        }

        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))
      countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimerOut)
  }

  return {
    countDown,
    resete,
    updateDisplay,
    updateMinutes,
    hold,
  }
}
