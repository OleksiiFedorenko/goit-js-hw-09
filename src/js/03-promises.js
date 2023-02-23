import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;

  new Array(Number(amount.value))
    .fill(0)
    .map((_, i) => Number(delay.value) + i * Number(step.value))
    .forEach((d, i) =>
      createPromise(i + 1, d)
        .then(Notify.success)
        .catch(Notify.failure)
    );

  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) resolve(`Fulfilled promise ${position} in ${delay}ms`);
      else reject(`Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
