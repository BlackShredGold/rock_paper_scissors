// generate the selection for the player and the computer.
function getPlayerMove() {
	let playerSelection = prompt("Type Rock, Paper, or Scissors!");
	// get rid of any whitespace and normalize capitalization of the user entry
	let trimmedPlayerSelection = playerSelection.trim().toLowerCase();
	return trimmedPlayerSelection;
}

function getComputerMove() {
	// Math.random() generates a random number between 0 and 1. Math.floor() rounds a decimal down to the nearest integer
	const computerSelection = Math.floor((Math.random() * 3) + 1);
	return computerSelection;
}
			
// convert the player move from a string to an int in order to compare it with the computer move
function convertPlayerMoveToInt(playerMove) {
	// for this function Rock = 1, Paper = 2, Scissors = 3, error = 4
	let playerMoveInt;
	if (playerMove === "rock") {
		playerMoveInt = 1;
		return playerMoveInt;
	}
	else if (playerMove === "paper") {
		playerMoveInt = 2;
		return playerMoveInt;
	}
	else if (playerMove === "scissors") {
		playerMoveInt = 3;
		return playerMoveInt;
	}
	else {
		playerMoveInt = 4;
		return playerMoveInt;
	}
}

// this function takes the return values of getPlayerMove() and getComputerMove() as input to play one round of the game
// returns true for player win, false for computer win
function playRound(playerSelection, computerSelection) {
	// first handle a tie
	if (playerSelection === computerSelection) {
        console.log("Tie!");
        return null;
	}
	// conditions if player plays rock
	else if (playerSelection === 1 && computerSelection === 2) {
        console.log("Rock gets wrapped by paper. You lose!");
        return false;
	}
	else if (playerSelection === 1 && computerSelection === 3) {
        console.log("Rock crushes scissors. You win!");
        return true;
	}
	// conditions if player plays paper
	else if (playerSelection === 2 && computerSelection === 1) {
        console.log("Paper wraps rock. You win!");
        return true;
	}
	else if (playerSelection === 2 && computerSelection === 3) {
        console.log("Paper is cut by scissors. You lose!");
        return false;
	}
	// conditions if player plays scissors
	else if (playerSelection === 3 && computerSelection === 1) {
        console.log("Scissors is crushed by rock. You lose!");
        return false;
	} 
	else if (playerSelection === 3 && computerSelection === 2) {
        console.log("Scissors cuts paper. You win!");
        return true;
	}
	else {
        console.log("Something went wrong");
        return null;
	}
}
            
// main gameplay loop. There are 5 total rounds, highest score at end wins
function game() {
    // initialize player scores
    let userScore = 0;
    let computerScore = 0;

    // loop the gameplay for 5 total rounds
    for (rounds = 1; rounds <= 5; rounds++) {
        // print the current round and score to the console
        console.log("Round: " + rounds);
        console.log("Your Score: " + userScore + " Computer Score: " + computerScore);
        let whoWon = playRound(convertPlayerMoveToInt(getPlayerMove()), getComputerMove());
        // increment scores based on win condition in playRound()
        if (whoWon === true) {
            userScore++;
        }
        else if (whoWon === false) {
            computerScore++;
        }
        else if (whoWon === null) {
            console.log("Nobody scores. Try that round again.");
            rounds--;
        }
    }

    // Display the final score and tell the user if they won
    if (userScore > computerScore) {
        console.log("Your Score: " + userScore + " Computer Score: " + computerScore + " You win!");
    }
    else if (userScore < computerScore) {
        console.log("Your Score: " + userScore + " Computer Score: " + computerScore + " You lose!");
    }
    else {
        console.log("A tie? That's impossible out of five tries");
    }
}

// run the gameplay loop!
game();