const startTimer = 10;
let time = startTimer * 60;

const countdownEl = document.getElementById('countdown');
const questionsEl = document.getElementById('questions');
const buttonEl = document.getElementById('submit');

let myInterval = setInterval(updateCounter, 1000);

function updateCounter() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  console.log(time);
  if (time <= 590) {
    console.log('hi');
    questionsEl.style.display = 'none';
    document.querySelector('#myForm').submit();
    myStopFunction();
  }
}
function myStopFunction() {
  clearInterval(myInterval);
}
