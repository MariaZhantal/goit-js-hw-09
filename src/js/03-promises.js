import { Notify } from 'notiflix/build/notiflix-notify-aio';


const formEl = document.querySelector('.form');
const delayEL = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const ammountEL = document.querySelector('input[name="amount"]');


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

async function handleSubmit(e) {
  e.preventDefault();
  let currentDelay = Number(delayEL.value);

  for (let i = 0; i <= ammountEL.value; i++) {
    try {
      await createPromise(i, currentDelay);
      Notify.success(`✅ Fulfilled promise ${i + 1} in ${currentDelay}ms`);
    } catch (error) {
      Notify.failure(`❌ Rejected promise ${i + 1} in ${currentDelay}ms`);
    }
    currentDelay += Number(stepEl.value);
  }
}

formEl.addEventListener('submit', handleSubmit);
