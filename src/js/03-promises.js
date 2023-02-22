import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;
  console.log(delay.value, step.value, amount.value);
  const arr = new Array(Number(amount.value))
    .fill(Number(delay.value))
    .map((p, i, a) => (i ? a[i - 1] + Number(step.value) : p));
  console.log(arr);

  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) resolve(`Fulfilled promise ${position} in ${delay}ms`);
    else reject(`Rejected promise ${position} in ${delay}ms`);
  });
}

function onFulfilled(message) {
  Notify.success(message);
}

function onRejected(message) {
  Notify.failure(message);
}

// promise.then(onFulfilled).catch(onRejected);
