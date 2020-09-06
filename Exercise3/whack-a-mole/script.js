var gameActive = false;
var score = 0
var mole;
var isMole = false

window.onload = () => {
  var holes = document.querySelectorAll("div.mole")
  holes.forEach(hole => {
    hole.addEventListener('click', changeScore)
  })
}

function highScore(){
  var highScoreText = document.getElementById("high-score").innerText
  if (score > highScoreText) {
    document.getElementById("high-score").innerText = score
  }
}

function toggleButton() {
  if (gameActive === false) {
    score = 0
    document.getElementById("current-score").innerText = score
    moleStart();
  }
  gameActive = !gameActive;
  if (gameActive) {
    document.getElementById("btn").value = "Stop!"
  }
  else {
    document.getElementById("btn").value = "Start!"
      console.log("scoring")
      highScore()
  }
}

function moleDisappear(mole) {
  mole.classList.toggle("visible");
  isMole = false
}

function moleAppear() {
  isMole = true
  var index = Math.round(Math.random() * 3);
  mole = document.getElementsByClassName("mole")[index];
  mole.classList.toggle("visible");

  
  var time = Math.round(Math.random() * 700) + 400;
  setTimeout(() => {
    moleDisappear(mole);
    if (gameActive === true) {
      moleStart();
    }
  }, time);
}

function moleStart() {
  var time = Math.round(Math.random() * 2000) + 500;
  setTimeout(moleAppear, time);
}

function changeScore(e){
  var moleClicked = e.currentTarget.innerText
  var moleActive = mole.innerText
  if (moleClicked === moleActive && isMole === true) {
    score++
  }
  document.getElementById("current-score").innerText = score
}

