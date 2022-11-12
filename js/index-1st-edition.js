// [x] Initialize scores

            let compScore = 0;
            let playerScore = 0;

            // [] Initialize Selections

            let playerSelection;
            let computerSelection;

            // [x] playRound() function - plays a single round of Rock Paper Scissors.  Function should take 2 params - playerSelection & computerSelection
            // [x] And then return a string that declares the winner of the round liks so: "You Lose!  Paper beats Rock" 
            function playRound(playerSelection, computerSelection){

                
                // [x] computer makes selection

                computerSelection = computerPlay();

            // [x] Compare computerSelection to playerSelection.  Determine who wins

                switch(computerSelection){
                    case "Rock":
                        switch(playerSelection){
                            case "Rock":
                            
                                
                                return "You Tied!  " + playerSelection + " is equal to " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;

                            case "Paper":

                                playerScore++;
                                return "You Won!  " + playerSelection + " beats " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;

                            case "Scissors":

                                compScore++;


                                return "You Lose!  " + computerSelection + " beats " + playerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;
                        }

                    case "Paper":
                        switch(playerSelection){
                            case "Rock":
                            
                                compScore++;


                                return "You Lose!  " + computerSelection + " beats " + playerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;

                            case "Paper":

                                return "You Tied!  " + playerSelection + " is equal to " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;


                            case "Scissors":

                                playerScore++;

                                return "You Won!  " + playerSelection + " beats " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;
                        }

                    case "Scissors":
                    switch(playerSelection){
                            case "Rock":
                            
                                playerScore++;

                                return "You Won!  " + playerSelection + " beats " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;
                                break;

                            case "Paper":

                                compScore++;


                                return "You Lose!  " + computerSelection + " beats " + playerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;

                            case "Scissors":

                                return "You Tied!  " + playerSelection + " is equal to " + computerSelection + "!" + " Score: " + playerScore + " to " + compScore;;
                                break;

                        }

                }
                console.log("Computer selection: " + computerSelection + " Player selection: " + playerSelection);

            };

