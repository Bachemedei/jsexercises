var userChoice = undefined;
var computerChoice = undefined;
var result = undefined;

// Determine which button the user clicked and therefore what their choice was
window.onload = () => {
  var buttons = document.getElementById("btns").querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", showChoice);
  });
};

// Display the choices of the user and the computer
function showChoice(event) {
  userChoice = event.currentTarget.innerText;
  document.getElementById("user-choice").innerText = userChoice;

  computerSelection();
  winner();
}

// Randomising the computer choice
function computerSelection() {
  const choices = ["Rock!", "Paper!", "Scissors!"];
  var index = Math.round(Math.random() * 2);
  computerChoice = choices[index];
  document.getElementById("computer-choice").innerText = computerChoice;
}

// Determining winner
function winner() {
    if (userChoice === computerChoice) {
        result = "Tie!"
    }
    if (userChoice === "Rock!") {
        console.log("User chose rock")
        if (computerChoice === "Scissors!") {
            result = "You Win!"
        }
        if (computerChoice === "Paper!") {
            result = "Computer Wins"
        }
    }
    if (userChoice === "Scissors!") {
        console.log("User chose scissors")
        if (computerChoice === "Rock!") {
            result = "Computer Wins"
        }
        if (computerChoice === "Paper!") {
            result = "You Win!"
        }
    }
    if (userChoice === "Paper!") {
        console.log("User chose paper")
        if (computerChoice === "Rock!") {
            result = "You Win!"
        }
        if (computerChoice === "Scissors!") {
            result = "Computer Wins"
        }
    }
    document.getElementById("winner").innerText = result;
}

