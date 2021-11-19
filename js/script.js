const body = document.body;
let numGenerator = Math.round(Math.random() * 2);
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
let btnStart = document.getElementById("start-game");
let myInput = document.getElementById("input-box");
let changeName = document.getElementById("user-name");
let playerScoreText = document.getElementById("player-score");
let compScoreText = document.getElementById("computer-score");
let compChoseThis = document.getElementById("comp-choise");
const choices = ["rock", "paper", "scissors"];

//name
btnStart.addEventListener("click", function () {
  changeName.innerText = myInput.value;
});

// Choices
let playerChoice = 0;
let compChoice = choices[numGenerator];

// Score
let playerScore = 0;
let compScore = 0;

btnRock.addEventListener("click", function () {
  playerChoice = choices[0];
  numGenerator = Math.round(Math.random() * 2);
  compChoice = choices[numGenerator];
  if (compChoice === "paper") {
    compScore++;
    compScoreText.innerText = compScore;
    compChoseThis.innerText = "Computer chose ✋, you lose";
  } else if (compChoice === "scissors") {
    playerScore++;
    playerScoreText.innerText = playerScore;
    compChoseThis.innerText = "Computer chose ✌️, you win";
  } else {
    compChoseThis.innerText = `Computer chose 👊, it's a draw`;
  }
  if (playerScore === 3) {
    alert("you win!");
    resetGame()
  }

  if (compScore === 3) {
    alert("you lose");
    resetGame()
  }
});

btnScissors.addEventListener("click", function () {
  playerChoice = choices[2];
  numGenerator = Math.round(Math.random() * 2);
  compChoice = choices[numGenerator];
  if (compChoice === "rock") {
    compScore++;
    compScoreText.innerText = compScore;
    compChoseThis.innerText = "Computer chose 👊, you lose";
  } else if (compChoice === "paper") {
    playerScore++;
    playerScoreText.innerText = playerScore;
    compChoseThis.innerText = "Computer chose ✋, you win";
  } else {
    compChoseThis.innerText = `Computer chose ✌️, it's a draw`;
  }
  if (playerScore === 3) {
    alert("you win!");
    resetGame()
  }

  if (compScore === 3) {
    alert("you lose");
    resetGame()
  }
});

btnPaper.addEventListener("click", function () {
  playerChoice = choices[1];
  numGenerator = Math.round(Math.random() * 2);
  compChoice = choices[numGenerator];
  if (compChoice === "scissors") {
    compScore++;
    compScoreText.innerText = compScore;
    compChoseThis.innerText = "Computer chose ✌️, you lose";
  } else if (compChoice === "rock") {
    playerScore++;
    playerScoreText.innerText = playerScore;
    compChoseThis.innerText = "Computer chose 👊, you win";
  } else {
    compChoseThis.innerText = `Computer chose ✋, it's a draw`;
  }

  if (playerScore === 3) {
    alert("you win!");
    resetGame()
  }

  if (compScore === 3) {
    alert("you lose");
    resetGame()
  }
});

function resetGame() {
  playerScore = 0;
  compScore = 0;
  compScoreText.innerText = 0;
  playerScoreText.innerText = 0;
  compChoseThis.innerText = "";
}