const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
let colorChangingIntId = null;

hangEventListener(startBtnRef, startColorChanging);

function startColorChanging() {
  hangEventListener(stopBtnRef, stopColorChanging);

  bgColorChanger();
  colorChangingIntId = setInterval(bgColorChanger, 1000);

  startStopBtnDisabler(true, false);
}

function stopColorChanging() {
  hangEventListener(startBtnRef, startColorChanging);

  clearInterval(colorChangingIntId);
  startStopBtnDisabler(false, true);
}

function hangEventListener(ref, foo) {
  ref.addEventListener('click', foo, { once: true });
}

function bgColorChanger() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startStopBtnDisabler(startBtn, stopBtn) {
  startBtnRef.disabled = startBtn;
  stopBtnRef.disabled = stopBtn;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
