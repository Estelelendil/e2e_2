const arrCard = document.querySelectorAll('.img');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const mir = document.querySelector('#mir');
input.addEventListener('keyup', () => {
  console.log(arrCard);
  Array.of(arrCard).map((item) => {
    item.map((el) => {
      if (!el.classList.contains('blur')) {
        console.log('blur!');
        el.classList.add('blur');
        return true;
      }
      return false;
    });
    console.log('kus', item[0]);
    if (!item.classList.contains('blur')) {
      console.log('blur!');
      item.classList.add('blur');
      return true;
    }
    return false;
  });
});

button.addEventListener('click', () => {
  if (/^2/.test(input.value)) {
    mir.classList.remove('blur');
    console.log('TRUE');
  } else { console.log('FALSE'); }
});
