var gameActive = false;
var score = 0
var mole;
var isMole = false
var counter = 0  

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

// What happens when button is clicked
function toggleButton() {
  // If game is not running, pressing button starts game
  if (gameActive === false) {
    score = 0
    counter = 0
    document.getElementById("current-score").innerText = score
    moleStart();
    }
  gameActive = !gameActive;
  // If game is running, change name of button to stop
  if (gameActive) {
    document.getElementById("btn").value = "Stop!"
  }
  else {
    document.getElementById("btn").value = "Start!"
      highScore()
  }
}

// Makes mole disappear after a random time
function moleDisappear(mole) {
  mole.classList.toggle("visible");
  isMole = false
}

// Game loop 
function moleAppear() {
  isMole = true
  var index = Math.round(Math.random() * 3);
  mole = document.getElementsByClassName("mole")[index];
  // Makes mole appear
  mole.classList.toggle("visible");
  // Sets a random time for mole to stay visible for 
  var time = Math.round(Math.random() * 700) + 400;
  setTimeout(() => {
    // After time, make mole disappear
    moleDisappear(mole);
    // Loops game if less than 50 moles have appeared
    if (gameActive === true && counter < 50) {
      counter ++
      moleStart();
      console.log(counter)
    }
    // Stops game once 50 moles have appeared
    else {
      gameActive = !gameActive
      document.getElementById("btn").value = "Start!"
      highScore()
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

