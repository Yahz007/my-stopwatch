// Stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let running = false;

// DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Start button
startBtn.addEventListener("click", () => {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    running = true;
  }
});

// Stop button
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
});

// Reset button
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = "00:00:00";
});

// Update stopwatch function
function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = `${h}:${m}:${s}`;
}
