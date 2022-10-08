// TODO: write code here
const arrCells = document.querySelectorAll('.cell');
const vinContainer = document.querySelector('.vin');
const loseContainer = document.querySelector('.lose');
console.log(loseContainer);
const imgEl = document.createElement('img');
imgEl.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/master/dom/pic/goblin.png';
imgEl.alt = 'тут';
imgEl.classList.add('goblin');
console.log(arrCells);
console.log(imgEl);
let vin = 0;
let lose = 0;
vinContainer.textContent = vin;
loseContainer.textContent = lose;

window.setInterval(() => {
  const randomIndex = Math.round(Math.random() * (arrCells.length - 1));
  arrCells[randomIndex].insertBefore(imgEl, null);
  // console.log(randomIndex);
}, 1000);

function catchGoblin() {
  vin += 1;
  lose -= 1;
  vinContainer.textContent = vin;
  imgEl.remove();
}
imgEl.addEventListener('click', catchGoblin);

function dontCatchGoblin() {
  lose += 1;
  loseContainer.textContent = lose;
  if (lose === 5) {
    alert('GameOver');
    vin = 0;
    lose = 0;
    vinContainer.textContent = vin;
    loseContainer.textContent = lose;
  }
}
// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrCells.length; i++) {
  console.log(arrCells[i]);
  arrCells[i].addEventListener('click', dontCatchGoblin);
}
// arrCells.map((item) => item.addEventListener('click', dontCatchGoblin));
