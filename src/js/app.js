// TODO: write code here
const arrCells = document.querySelectorAll('.cell');

const imgEl = document.createElement('img');
imgEl.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png';
imgEl.alt = 'тут';
imgEl.classList.add('goblin');
console.log(arrCells);
console.log(imgEl);

window.setInterval(() => {
  const randomIndex = Math.round(Math.random() * (arrCells.length - 1));
  arrCells[randomIndex].insertBefore(imgEl, null);
  console.log(randomIndex);
}, 1000);
