function moleDisappear(mole) {
  console.log("diappear");
  mole.classList.toggle("mole-appear");
}

function moleAppear() {
  console.log("appear");
  var index = Math.round(Math.random() * 3);
  mole = document.getElementsByClassName("mole")[index];
  mole.classList.toggle("mole-appear");
  setTimeout(() => {
      moleDisappear(mole)
  }, 3000);
}

function moleStart(){
    setTimeout(moleAppear, 3000);
}