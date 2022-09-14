const startingMinutes = 4;
var time;
let popup = document.getElementById("jTimedoutAlert");

time =startingMinutes* 60;
const countdownEl = document.getElementById("timer");
// second data
let hidepopup = () => {
  popup.style.display = "none";
};
let showPopup = () => {
  popup.style.display = "block";
};
var myTimeout;
// myTimeout= setTimeout(showPopup, 5000);
function myStopFunction() {
  myTimeout = setTimeout(() => {
    showPopup();
  }, 122000);
}
myStopFunction();
// second data
var interval;

interval = setInterval(updateCountdown, 1000);

$("#clickme").click(function () {
  time = 240;
  hidepopup();
  myStopFunction();
});
// ====================

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (countdownEl.innerHTML == "0:00") {
    time = 0;
  window.location.href='https://google.com'
  }
}
