const inputWithTimer = document.getElementById('time');
const timerRender = document.getElementById('timer-render');
const buttonStart = document.getElementById('start');
const buttonClear = document.getElementById('clear');
const buttonStop = document.getElementById('stop');

let timer = 0;
let interval = 0

function renderTime() {
  let timerSeconds = (timer % 60).toString();
  let timerMinutes = parseInt(timer / 60).toString();
  const timeRenderTime = `${timerMinutes.padStart(2, '0')}:${timerSeconds.padStart(2, '0')}`;
  timerRender.innerHTML = timeRenderTime
};

function initTimer(actualTime = undefined) {
  timer = !actualTime ? inputWithTimer.value * 60: actualTime;
  renderTime();
  interval = setInterval(() => {
    if(timer === 0) return clearInterval(interval);
    timer -= 1;
    renderTime();
  }, 1000);
};

function clearTimer () {
  clearInterval(interval);
  timer = 0;
  renderTime();
};

let isPLay = true
function stopTimer () {
  isPLay = !isPLay;
  const actualTimer = timer
  if(!isPLay) return clearInterval(interval);
  initTimer(actualTimer)
  renderTime()
};

buttonStart.addEventListener('click', () => initTimer());
buttonClear.addEventListener('click', clearTimer);
buttonStop.addEventListener('click', stopTimer);
