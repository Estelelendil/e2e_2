const arrCard = Array.from(document.querySelectorAll('.img'));
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const mir = document.querySelector('#mir');
const mastercard = document.querySelector('#mastercard');
const visa = document.querySelector('#visa');
const amix = document.querySelector('#amix');
const diners = document.querySelector('#diners');
const discover = document.querySelector('#discover');
// const list = arrCard.querySelectorAll('div');
input.addEventListener('keyup', () => {
  console.log(arrCard);
  arrCard.forEach((item) => {
    if (!item.classList.contains('blur')) {
      item.classList.add('blur');
    }
  });
});

button.addEventListener('click', () => {
  if (/^2/.test(input.value)) {
    mir.classList.remove('blur');
  }
  if ((/^34/.test(input.value)) || (/^37/.test(input.value))) {
    amix.classList.remove('blur');
  }
  if ((/^30/.test(input.value)) || (/^55/.test(input.value))) {
    diners.classList.remove('blur');
  }
  if (/^4/.test(input.value)) {
    visa.classList.remove('blur');
  }
  if ((/^52/.test(input.value)) || (/^54/.test(input.value))) {
    mastercard.classList.remove('blur');
  }
  if (/^6/.test(input.value)) {
    discover.classList.remove('blur');
  }
});
