const ball = document.querySelectorAll('.ball');
const rgb = document.getElementById('rgb-color');
const select = document.getElementById('answer');
const score = document.getElementById('score');

// // Requisito 04 - gerar cor aleatória
function generateColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = generateColor();
}

function loadLocalStorage() {
  localStorage.setItem('placar', score.innerHTML);
}

// function placar() {
//   if (select.innerHTML === 'Acertou! Novas cores!') {
//     pontos += 3;
//     loadLocalStorage();
//   }
// }

function certo(event) {
  let pontos = parseInt(score.innerText, 10);
  if (event.target.style.backgroundColor === `rgb${rgb.innerText}`) {
    select.innerText = 'Acertou! Novas cores!';
    pontos += 3;
    score.innerHTML = pontos;
  } else {
    select.innerText = 'Errou! Tente novamente!';
  }
  loadLocalStorage();
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', certo);
}

function colorSelected(cor) {
  rgb.innerHTML = cor;
}

function cor2() {
  const cores = [];
  for (let index = 0; index < ball.length; index += 1) {
    const corRGB = ball[index].style.backgroundColor;
    const nRGB = corRGB.substring(3);
    cores[index] = nRGB;
  }
  colorSelected(cores[Math.floor(Math.random() * 6)]);
}
cor2();

// // Requisito 07
function getLocalStorage() {
  score.innerHTML = 0;
  const load = localStorage.getItem('placar');
  if (load) {
    score.innerHTML = load;
  }
}

window.onload = getLocalStorage;

// // 6 - botão para reiniciar
const btn = document.getElementById('reset-game');

btn.addEventListener('click', () => {
  document.location.reload();
});
