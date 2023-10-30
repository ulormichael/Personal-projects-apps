const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const clickToStart = document.querySelector('.clickToStart'); // Corrected variable name

clickToStart.addEventListener('click', Start); // Corrected event listener
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};
let player = {
  speed: 5,
  score: 0,
  highScore: 0,
};
function keydown(e) {
  keys[e.key] = true;
}
function keyup(e) {
  keys[e.key] = false;
}
function Start() {
  gameArea.innerHTML = '';
  startScreen.classList.add('hide');
  player.isStart = true;
  player.score = 0;
  window.requestAnimationFrame(Play);

  for (let i = 0; i < 3; i++) { // Corrected the loop syntax
    let roadLines = document.createElement('div');
    roadLines.setAttribute('class', 'roadLines');
    roadLines.y = i * 140;
    roadLines.style.top = roadLines.y + 'px';
    gameArea.appendChild(roadLines);
  }

  for (let i = 0; i < 3; i++) { // Corrected the loop syntax
    let Opponent = document.createElement('div'); // Corrected variable name
    Opponent.setAttribute('class', 'Opponents');
    Opponent.y = -300; // Corrected value
    Opponent.style.top = Opponent.y + 'px';
    gameArea.appendChild(Opponent);
    Opponent.style.left = Math.floor(Math.random() * 350) + 'px';
    Opponent.style.backgroundColor = randomColor();
  }

  for (let i = 0; i < 3; i++) { // Corrected the loop syntax
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
  }
}
function randomColor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ('00' + String(hex)).substr(-2); // Corrected padding
  }
  return '#' + c() + c() + c();
}
function Play() {
  let car = document.querySelector('.car');
  let road = gameArea.getBoundingClientRect(); // Corrected the method

  if (player.isStart) {
    moveLines();
    moveOpponents(car);
    if (keys.ArrowUp && player.y > road.top + 70) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.height - 75) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x < 350) {
      player.x += player.speed;
    }
    if (keys.ArrowRight && player.x > 0) { // Corrected ArrowLeft to ArrowRight
      player.x -= player.speed;
    }
    car.style.top = player.y + 'px';
    car.style.left = player.x + 'px';
    highScore.innerHTML = 'HighScore: ' + (player.highScore - 1);
    player.score++;
    player.speed += 0.01;
    if (player.highScore < player.score) {
      player.highScore++;
      highScore.innerHTML = 'HighScore: ' + (player.highScore - 1);
      highScore.style.top = '80px';
    }
    score.innerHTML = 'Score: ' + (player.score - 1);
    window.requestAnimationFrame(Play);
  }
}
function moveLines() {
  let roadLines = document.querySelectorAll('.roadLines');
  roadLines.forEach(function (item) {
    if (item.y >= 700) {
      item.y -= 700;
    }
    item.y += player.speed;
    item.style.top = item.y + 'px';
  });
}
function moveOpponents(car) {
  let Opponents = document.querySelectorAll('.Opponents');
  Opponents.forEach(function (item) {
    if (isCollide(car, item)) {
      endGame();
    }
    if (item.y >= 750) {
      item.y -= 900;
      item.style.left = Math.floor(Math.random() * 350) + 'px'; // Corrected concatenation
    }
    item.y += player.speed;
    item.style.top = item.y + 'px';
  });
}
function isCollide(a, b) {
  aRect = a.getBoundingClientRect();
  bRect = b.getBoundingClientRect();
  return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
function endGame() {
  player.isStart = false;
  player.speed = 5;
  startScreen.classList.remove('hide');
}

