function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection.toLowerCase() == "rock") {
        playerSelection = 1;
    }
    else if (playerSelection.toLowerCase() == "paper") {
        playerSelection = 2;
    }
    else {
        playerSelection = 3;
    }

    if (playerSelection == computerSelection) {
        return result = "You tie!";
    }

    switch(playerSelection) {
        case 1:
            if (computerSelection == 2) {
                result = "You Lose! Paper beats Rock";
                break;
            }
            else {
                result = "You Win! Rock beats Paper";
                break;
            }
        case 2:
            if (computerSelection == 1) {
                result = "You Win! Paper beats Rock";
                break;
            }
            else {
                result = "You Lose! Scissors beats Paper";
                break;
            }
        case 3:
            if (computerSelection == 1) {
                result = "You Lose! Rock beats Scissors";
                break;
            }
            else {
                result = "You Win! Scissors beats Paper";
                break;
            }
        }

        return result;
    } 

function game() {
    let playerSelection = prompt("Choose: Rock, Paper or Scissors.");

    while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") {
        playerSelection = prompt("Invalid input. Please only enter Rock, Paper or Scissors.");
    }
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let finalResult = playRound(playerSelection, computerSelection);
        console.log("The results of round " + (i + 1) + " are: " + finalResult);
    }
} 
game();

