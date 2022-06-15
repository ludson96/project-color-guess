const ball = document.querySelectorAll('.ball');
const rgb = document.getElementById('rgb-color');
const select = document.getElementById('select');

// // Requisito 04 - gerar cor aleatória
function generateColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function colorSelected(cor) {
  rgb.innerHTML = cor;
}
window.onload = function cor() {
  const cores = [];
  for (let index = 0; index < ball.length; index += 1) {
    const corRGB = ball[index].style.backgroundColor;
    const nRGB = corRGB.substring(3);
    cores[index] = nRGB;
  }
  colorSelected(cores[Math.floor(Math.random() * 6)]);
};

function certo(event) {
  if (event.target.style.backgroundColor === `rgb${rgb.innerText}`) {
    select.innerText = 'Acertou! Novas cores!';
  }
  // console.log(event.target.style.backgroundColor);
}

for (let index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = generateColor();
  ball[index].addEventListener('click', certo);
}
