// Rotate images 90 degrees

                let images = document.querySelectorAll('img');

                images.forEach(img => img.style.transform = "rotate(90deg)");
                
                // Initialize playerSelection & computerSelection


                let playerSelection, computerSelection;

                // Initialize scores

                let compScore = 0;
                let playerScore = 0;

                // Initialize output div

                let response = document.querySelector('#results');

            // Initialize # of Wins

            let roundSelector;

            let numberOfRounds = 5;

            roundSelector = document.querySelector('#roundInput'); 

            console.log("First Round Selector: " + roundSelector.value);

            // Initialize finalRoundsMessage

            let finalRoundsMessage;
            
            // Change # of Wins on select
            
            roundSelector.addEventListener("change", (e) => {

                    numberOfRounds = roundSelector.options[roundSelector.selectedIndex].getAttribute('value');

                    console.log("Second Round Selector: " + numberOfRounds);

                    return numberOfRounds;

                });