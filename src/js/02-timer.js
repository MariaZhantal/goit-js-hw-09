import { Notify } from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      Notify.failure('Please choose a date in the future');

    } else {

    }
  },
};

flatpickr(datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
  const selectedDate = new Date(datetimePicker.value);
  const currentDate = new Date();
  const difference = selectedDate - currentDate;
  startButton.disabled = true;
  datetimePicker.disabled = true;
<<<<<<< HEAD

=======
>>>>>>> c8c383e37ab99c793b065f59fa3b72f1219a30c4

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const remainingTime = convertMs(difference - (Date.now() - currentDate.getTime()));
    daysValue.textContent = addLeadingZero(remainingTime.days);
    hoursValue.textContent = addLeadingZero(remainingTime.hours);
    minutesValue.textContent = addLeadingZero(remainingTime.minutes);
    secondsValue.textContent = addLeadingZero(remainingTime.seconds);

    if (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
      clearInterval(countdownInterval);
      Notify.success('Countdown timer ended!');
    }
  }, 1000);
});
