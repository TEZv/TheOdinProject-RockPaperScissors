function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);

  return options[random];
}

function playRound(playerSelection, computerSelection) {
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  if (playerSelection === computerSelection) {
    console.log("Tie, try again");
    return null;
  }

  if (playerSelection === rock && computerSelection === paper) {
    console.log("You Lose! Paper beats Rock");
    return false;
  } else if (playerSelection === rock && computerSelection === scissors) {
    console.log("You Win! Rock beats Scissors");
    return true;
  } else if (playerSelection === paper && computerSelection === rock) {
    console.log("You Win! Paper beats Scissors");
    return true;
  } else if (playerSelection === paper && computerSelection === scissors) {
    console.log("You Lose! Scissors beat Paper");
    return false;
  } else if (playerSelection === scissors && computerSelection === rock) {
    console.log("You Lose! Rock beats scissors");
    return false;
  } else if (playerSelection === scissors && computerSelection === paper) {
    console.log("You Win!, Scissors beat Paper");
    return true;
  } else {
    console.log("Error, Something is wrong");
    return null;
  }
}

function lowerCase(text) {
  return text.toLowerCase();
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors? ");
    const computerSelection = computerPlay();

    const result = playRound(
      lowerCase(playerSelection),
      lowerCase(computerSelection)
    );

    switch (result) {
      case true:
        playerScore++;
        break;
      case false:
        computerScore++;
        break;
      default:
        break;
    }
  }

  console.log("------------------------");
  console.log("You:", playerScore, "Computer:", computerScore);
  if (computerScore > playerScore) {
    console.log("Computer Wins!");
  } else if (playerScore > computerScore) {
    console.log("Congratulations! you win");
  } else {
    console.log("It's a Tie!, no one wins");
  }
}

game();
