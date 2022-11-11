// Initialize playerSelection & computerSelection

let playerSelection;
let computerSelection;

// Initialize scores

let compScore = 0;
let playerScore = 0;

// [x] Computer choice - computerPlay() function - randomly return either 'Rock', 'Paper' or 'Scissors'.

function computerPlay() {
  numberSelection = Math.floor(Math.random() * 3);

  switch (numberSelection) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}
// [x] Get user input - Convert to correct form

function getPlayerInput() {
  let playerInput = window.prompt("Rock, Paper, or Scissors?");

  playerChoice = caseInsensitive(playerInput);

  return playerChoice;
}

// Make input case - insensitive

function caseInsensitive(playerInput) {
  playerFirstLetter = playerInput.charAt(0).toUpperCase();
  playerRemainingWord = playerInput.substr(1).toLowerCase();
  playerInput = playerFirstLetter.concat("", playerRemainingWord);
  return playerInput;
}
// Play Round

function playRound(playerSelection, computerSelection) {
  // Get Computer Choice & Convert computerPlay() -> to variable "computerSelection"

  computerSelection = computerPlay();

  // Get User Choice & Convert getPlayerInput() -> to variable "playerSelection"

  playerSelection = getPlayerInput();

  // Computer & Player choices made

  console.log("Computer Choice: " + computerSelection);
  console.log("Player Choice: " + playerSelection);

  // Comparison

  switch (computerSelection) {
    case "Rock":
      switch (playerSelection) {
        case "Rock":
          return (
            "You Tied!  " +
            playerSelection +
            " is equal to " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Paper":
          playerScore++;
          return (
            "You Won!  " +
            playerSelection +
            " beats " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Scissors":
          compScore++;

          return (
            "You Lose!  " +
            computerSelection +
            " beats " +
            playerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;
      }

    case "Paper":
      switch (playerSelection) {
        case "Rock":
          compScore++;

          return (
            "You Lose!  " +
            computerSelection +
            " beats " +
            playerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Paper":
          return (
            "You Tied!  " +
            playerSelection +
            " is equal to " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Scissors":
          playerScore++;

          return (
            "You Won!  " +
            playerSelection +
            " beats " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;
      }

    case "Scissors":
      switch (playerSelection) {
        case "Rock":
          playerScore++;

          return (
            "You Won!  " +
            playerSelection +
            " beats " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Paper":
          compScore++;

          return (
            "You Lose!  " +
            computerSelection +
            " beats " +
            playerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;

        case "Scissors":
          return (
            "You Tied!  " +
            playerSelection +
            " is equal to " +
            computerSelection +
            "!" +
            "  Score is now Computer: " +
            compScore +
            " vs. Player: " +
            playerScore
          );
          break;
      }
  }
}
// Run game - Play 5 Rounds

function game() {
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
  console.log(playRound(playerSelection, computerSelection));
}
console.log(game());
