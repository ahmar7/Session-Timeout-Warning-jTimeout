let popup = document.getElementById("jTimedoutAlert");
let times = document.getElementById("time");

let hidepopup=()=>{

    popup.style.display = "none";
}
let showPopup = () => {
    popup.style.display = "block";
};
const myTimeout = setTimeout(showPopup, 1000);

function myStopFunction() { 
    setTimeout(() => {
        showPopup()
    }, 1000);
}

// =====================

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  const myInterval = setInterval(myTimer, 1000);
  function myTimer() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
console.log("real",seconds, minutes, times.innerHTML);
   if (times.innerHTML == "00:00") {
      console.log("cefc");
    }

    if (seconds == 0 && minutes == 0) {
        clearInterval(myInterval);
         
    }
    if (--timer < 0) {
      timer = duration;
    }
  }
}


function startCount() { 
    var fiveMin = 15;
     
    display = document.querySelector("#time");
    startTimer(fiveMin, display); 
    console.log(fiveMin);
    
}
const countDown = setTimeout(startCount, 1000);
 
function mystart() {
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  const myInterval = clearInterval(myTimer, 1000);
  function myTimer() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    console.log("real", seconds, minutes, times.innerHTML);
    if (times.innerHTML == "00:00") {
      console.log("cefc");
    }

    if (seconds == 0 && minutes == 0) {
      clearInterval(myInterval);
    }
    if (--timer < 0) {
      timer = duration;
    }
  }
}
clearInterval(startTimer,1000)
}
 let inputval = document.getElementById("inputval");
 let function1 = () => {
//    hidepopup();
   myStopFunction(); 
    mystart()
 };
