

let popup = document.getElementById("jTimedoutAlert");

let showPopup =()=>{
    popup.style.display="block"
}
const myTimeout = setTimeout(showPopup, 5000);

function myStopFunction() {
  clearTimeout(myTimeout);
}



// =====================
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};