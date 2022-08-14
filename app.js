const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function runClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // gives '0' in front if hours/min/sec is less than 10 (un-important but looks good)

  hourElement.innerText = h;
  minElement.innerText = m;
  secElement.innerText = s;
  ampmElement.innerText = ampm;

  setTimeout(() => {
    runClock();
  }, 1000);
}

runClock();
