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

// Randomising the computer choice
function computerSelection() {
  const choices = ["Rock!", "Paper!", "Scissors!"];
  var index = Math.round(Math.random() * 2);
  computerChoice = choices[index];
  var container = "computer-img"
  // display image
  determineImageUrl(computerChoice, container)
  //display choice text
  document.getElementById("computer-choice").innerText = "The computer chose " + computerChoice;
}

// Get image URL based on choice and add to HTML
function determineImageUrl(choice, container) {
    // Determine which image URL to use
    if (choice === "Rock!") {
        imageURL = "https://ctl.s6img.com/society6/img/Ee7g71xE-r6Yg3B-M75Bt9nPtbg/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/1badeed855904fcc89c274af6161c983/~~/cute-rock-prints.jpg"
    }
    if (choice === "Paper!") {
        imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZQEvW75gxhCU6t_APVjrSSn6m0ypguCq-7Q&usqp=CAU"
    }
    if (choice === "Scissors!") {
        imageURL = "https://cdn4.vectorstock.com/i/thumb-large/69/78/scissor-cute-cartoon-vector-14506978.jpg"
    }
    // Add image to the HTML doc
    function addImage(container) {
        var image = document.getElementById(container)
        image.src = imageURL
        // document.getElementById(container).appendChild(image)
    }
    addImage(container)
}

// Display the choices of the user and the computer
function showChoice(event) {
    userChoice = event.currentTarget.innerText;
    var container = "user-img"
    // display image
    determineImageUrl(userChoice, container)
    // display choice text
    document.getElementById("user-choice").innerText = "You chose " + userChoice;
    
    // run computer selection
    computerSelection();
    winner();
  }

// Determining winner
function winner() {
    if (userChoice === computerChoice) {
        result = "It's a tie. Try again"
    }
    if (userChoice === "Rock!") {
        console.log("User chose rock")
        if (computerChoice === "Scissors!") {
            result = "You win!"
        }
        if (computerChoice === "Paper!") {
            result = "Computer wins, try again"
        }
    }
    if (userChoice === "Scissors!") {
        console.log("User chose scissors")
        if (computerChoice === "Rock!") {
            result = "Computer wins, try again"
        }
        if (computerChoice === "Paper!") {
            result = "You win!"
        }
    }
    if (userChoice === "Paper!") {
        console.log("User chose paper")
        if (computerChoice === "Rock!") {
            result = "You win!"
        }
        if (computerChoice === "Scissors!") {
            result = "Computer wins, try again"
        }
    }
    document.getElementById("winner").innerText = result;
}

