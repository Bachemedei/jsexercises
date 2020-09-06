var button = false;
var score = 0
var mole;
var isMole = false

window.onload = () => {
  var holes = document.querySelectorAll("div.mole")
  holes.forEach(hole => {
    hole.addEventListener('click', changeScore)
  })
}

function toggleButton() {
  if (button === false) {
    moleStart();
  }
  button = !button;
}

function moleDisappear(mole) {
  mole.classList.toggle("mole-visible");
  isMole = false
}

function moleAppear() {
  isMole = true
  var index = Math.round(Math.random() * 3);
  mole = document.getElementsByClassName("mole")[index];
  mole.classList.toggle("mole-visible");

  
  var time = Math.round(Math.random() * 700) + 400;
  setTimeout(() => {
    moleDisappear(mole);
    if (button === true) {
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
  currentScore = "Score: " + score
  document.getElementById("current-score").innerText = currentScore
}