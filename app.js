setInterval(workClock, 1000)

function workClock() {
  let hour = document.querySelector('.hour')
  let minute = document.querySelector('.minute')
  let second = document.querySelector('.second')
  let digitalHour = document.querySelector('.digital-hour')
  let digitalMinute = document.querySelector('.digital-minute')
  let digitalSecond = document.querySelector('.digital-second')
  let dClock = document.querySelector('.digital-clock')

  let time = new Date()
  let timeHour = time.getHours()
  let timeMinute = time.getMinutes()
  let timeSecond = time.getSeconds()
  let rotateHour = 30 * timeHour + timeMinute / 2
  let rotateMinute = 6 * timeMinute
  let rotateSecond = 6 * timeSecond

  hour.style.transform = ` translate(-50%, 0) rotate(${rotateHour}deg)`
  minute.style.transform = ` translate(-50%, 0) rotate(${rotateMinute}deg)`
  second.style.transform = ` translate(-50%, 0) rotate(${rotateSecond}deg)`

  digitalHour.innerHTML = timeHour
  dClock.innerHTML = ` ${timeHour} : ${timeMinute} : ${timeSecond}`
  if (timeHour < 10) {
    digitalHour.innerHTML = `0${timeHour}`
    // for digital Clock
    dClock.innerHTML = `0${timeHour} : ${timeMinute} : ${timeSecond}`
  }

  digitalMinute.innerHTML = timeMinute
  if (timeMinute < 10) {
    digitalSecond.innerHTML = `0${timeMinute}`
    // for digital Clock
    dClock.innerHTML = ` ${timeHour} : 0${timeMinute} : ${timeSecond}`
  }

  digitalSecond.innerHTML = timeSecond
  if (timeSecond < 10) {
    digitalSecond.innerHTML = `0${timeSecond}`
    // for digital Clock
    dClock.innerHTML = ` ${timeHour} : ${timeMinute} : 0${timeSecond}`
  }

  // for AM/PM Clock
  if (timeHour < 12) {

  }
}

onload = workClock()
