const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const restartButton = document.getElementById("restart-btn");

let playerChoice = "";
let computerChoice = "";
let result = "";

// Function to get a random computer choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win! 🎉";
  }
  return "Computer wins! 💻";
}

// Function to play the game
function playGame(e) {
  playerChoice = e.target.getAttribute("data-choice");
  computerChoice = getComputerChoice();

  playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
  computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
  result = determineWinner(playerChoice, computerChoice);
  winnerDisplay.textContent = `Result: ${result}`;

  restartButton.style.display = "block";
}

// Event listeners
choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
});

// Restart the game
restartButton.addEventListener("click", () => {
  playerChoiceDisplay.textContent = "You chose: ";
  computerChoiceDisplay.textContent = "Computer chose: ";
  winnerDisplay.textContent = "Result: ";
  restartButton.style.display = "none";
});
