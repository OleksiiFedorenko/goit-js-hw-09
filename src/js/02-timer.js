import flatpickr from 'flatpickr';
// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';
import 'flatpickr/dist/flatpickr.min.css';

const calendarRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0].getTime());
    // console.log(Date.now());
    if (selectedDates[0].getTime() < Date.now()) {
      alert('Please choose a date in the future');
      btnRef.disabled = true;
    } else {
      chosenTime = selectedDates[0].getTime();
      btnRef.disabled = false;
      btnRef.addEventListener('click', runCountdown, { once: true });
    }
  },
};
let chosenTime = null;
let countdownIntId = null;

const fp = flatpickr(calendarRef, options);

function runCountdown() {
  btnRef.disabled = true;
  countdownIntId = setInterval(() => {
    const deltaTime = chosenTime - Date.now();
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    // console.log(days, hours, minutes, addLeadingZero(seconds));
    daysRef.textContent = addLeadingZero(days);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
    if (!days && !hours && !minutes && !seconds) clearInterval(countdownIntId);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
