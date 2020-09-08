const container = document.querySelector(".container");
const text = document.getElementById("text");
const counter = document.getElementById("counter");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const pointer = document.getElementsByClassName("pointer-container");
console.log(pointer[0], stop);
const totalTime = 19000;

// const inhalePercentage = 21 // percentage based on 4-7-8
// const holdPercentage = 37
// const exhalePercentage = 42
// to get desired percentage:
// function percentage(percent, total) {
//   return ((percent/ 100) * total).toFixed(2)
// }

const inhale = 4000;
const hold = 7000;
const exhale = 8000;
const cycles = 3;
let kickOf = true;
let started = false;
let completed = false;
let timersArr = [];
let intervalsArr = [];

start.addEventListener("click", startExercise);
stop.addEventListener("click", stopExercise);

function stopExercise() {
  started = false;
  text.innerText = "";
  counter.innerText = "";
  kickOf = true;
  container.className = "container stop";
  // pointer[0].className = "pointer-container goBack";
  pointer[0].classList.remove("goAround");

  timersArr.forEach((timer) => clearTimeout(timer));
  intervalsArr.forEach((interval) => clearInterval(interval));
}

function startExercise() {
  started = true;
  setIntervalX(breatheAnimation, totalTime, 2);
}

function breatheAnimation() {
  // text.innerHTML = "Inhale";
  text.innerText = "Inhale";
  // counter.innerHTML = " ";
  container.className = "container grow";
  pointer[0].className = "pointer-container goAround";
  countDown(4);

  timersArr.push(
    setTimeout(() => {
      text.innerText = "Hold";
      countDown(7);

      timersArr.push(
        setTimeout(() => {
          text.innerText = "Exhale";
          countDown(8);
          container.className = "container shrink";

          if (completed) {
            completed = false;
            timersArr.push(
              setTimeout(() => {
                text.innerText = "Relax";
                counter.innerText = "🔁";
                kickOf = true;
                pointer[0].classList.remove("goAround");
              }, exhale)
            );
          }
        }, hold)
      );
    }, inhale)
  );
}

function countDown(cycle) {
  let num = 0;
  counter.innerText = "-";
  const intervalCount = window.setInterval(() => {
    // counter.innerText = "1";
    num++;
    counter.innerText = `${num}`;
    if (num >= cycle) {
      window.clearInterval(intervalCount);
      counter.innerText = "-";
    }
  }, 1000);
  intervalsArr.push(intervalCount);
}

function setIntervalX(callback, delay, repetitions) {
  let x = 0;

  // in the beginning start right away
  if (kickOf) {
    kickOf = false;
    callback();
    x++;
  }

  const intervalId = window.setInterval(() => {
    // call again
    callback();
    x++;
    if (x >= repetitions) {
      window.clearInterval(intervalId);
      completed = true;
    }
  }, delay);
  intervalsArr.push(intervalId);
  // stop.addEventListener("click", () => stopExercise(intervalId));
}

// setIntervalX(breatheAnimation, totalTime, 1);

// setInterval(breatheAnimation, totalTime);
// unsuccessfull atempt to show last second
// function beforeSwitch(lastNum) {
//   counter.innerText = `${lastNum}`;
//   return new Promise((done) =>
//     setTimeout(() => {
//       done();
//       // counter.innerText = "-";
//     }, 350)
//   );
// }
