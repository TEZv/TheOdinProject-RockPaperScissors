// Rotate images 90 degrees

let images = document.querySelectorAll("img");

images.forEach((img) => (img.style.transform = "rotate(90deg)"));

// Initialize playerSelection & computerSelection

let playerSelection, computerSelection;

// Initialize scores

let compScore = 0;
let playerScore = 0;

// Initialize output div

let response = document.querySelector("#results");

// Initialize # of Wins

let roundSelector;

let numberOfRounds = 5;

roundSelector = document.querySelector("#roundInput");

console.log("First Round Selector: " + roundSelector.value);

// Initialize finalRoundsMessage

let finalRoundsMessage;

// Change # of Wins on select

roundSelector.addEventListener("change", (e) => {
  numberOfRounds =
    roundSelector.options[roundSelector.selectedIndex].getAttribute("value");

  console.log("Second Round Selector: " + numberOfRounds);

  return numberOfRounds;
});
// Make buttons clickable - on click, play round

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(button.getAttribute("value"), computerPlay(), numberOfRounds);
  });
});

//testReturnValues(compScore, playerScore, playerSelection, computerSelection);

//getPlayerSelection();

/*function testReturnValues(compScore, playerScore, playerSelection, computerSelection){
                console.log("playerSelection: " + playerSelection);
                console.log("computerSelection: " + computerSelection);
                console.log("compScore: " + compScore);
                console.log("playerScore: " + playerScore);
            };
            */

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
// Make input case - insensitive
/*
            function caseInsensitive(playerInput){
                playerFirstLetter = playerInput.charAt(0).toUpperCase();
                playerRemainingWord = playerInput.substr(1).toLowerCase();
                playerInput = playerFirstLetter.concat("", playerRemainingWord);
                return playerInput;
            }
            */

// Play Round

function playRound(playerSelection, computerSelection, numberOfRounds) {
  // Get Computer Choice & Convert computerPlay() -> to variable "computerSelection"

  // Get User Choice & Convert getPlayerInput() -> to variable "playerSelection"

  // playerSelection = document.getElementById.value;

  // playerSelection = getPlayerInput(playerClick);

  // Computer & Player choices made

  console.log("Computer Choice: " + computerSelection);
  console.log("Player Choice: " + playerSelection);
  // Comparison

  response.innerHTML = roundWinner(playerSelection, computerSelection);

  function roundWinner(playerSelection, computerSelection) {
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
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
              "<br>" +
              "<br>" +
              "Computer: " +
              compScore +
              " vs. Player: " +
              playerScore
            );
            break;
        }
    }
  }

  // Run game - Play 5 Rounds
  /*
                function game(){
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(playRound(playerSelection, computerSelection));
                    console.log(playRound(playerSelection, computerSelection));
                
                }
                console.log(game());
                */

  // Track the final winner of the game

  if (compScore == numberOfRounds) {
    finalRoundsMessage =
      "Sorry, the computer won the game.  The final score was:" +
      "<br>" +
      "<br>" +
      "Computer: " +
      compScore +
      " Player: " +
      playerScore;
    console.log("computer won");

    var finalOutput = document.querySelector("#finalResults");

    finalOutput.innerHTML = finalRoundsMessage;
  } else if (playerScore == numberOfRounds) {
    finalRoundsMessage =
      "Congratulations!  You won the game!  The final score was:" +
      "<br>" +
      "<br>" +
      "Computer: " +
      compScore +
      " Player: " +
      playerScore;
    console.log("you won");

    var finalOutput = document.querySelector("#finalResults");

    finalOutput.innerHTML = finalRoundsMessage;
  }
}
