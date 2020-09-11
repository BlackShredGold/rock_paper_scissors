const userMoveDisplay = document.querySelector('#playerMove');
const currentPlayerMove = document.createElement('p');

const compMoveDisplay = document.querySelector('#compMove');
const currentCompMove = document.createElement('p');

const playerScoreDisplay = document.querySelector('#player-score');
const currentPlayerScore = document.createElement('p');

const compScoreDisplay = document.querySelector('#comp-score');
const currentCompScore = document.createElement('p');

const roundDisplay = document.querySelector('#round');
const currentRound = document.createElement('p');

const playerFeedbackDisplay = document.querySelector('#result');
const currentResult = document.createElement('p');

let userScore = 0;
let computerScore = 0;
let rounds = 0;
let whoWon;

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

// convert the move back to a string for display
function convertPlayerMoveToString(playerMove) {
	if (playerMove === 1) {
		return "Rock";
	}
	else if (playerMove === 2) {
		return "Paper";
	}
	else if (playerMove === 3) {
		return "Scissors";
	}
	else {
		return "";
	}
}

// returns true for player win, false for computer win
function playRound(playerSelection, computerSelection) {
    // dynamically display current moves on screen
    currentPlayerMove.textContent = convertPlayerMoveToString(playerSelection);
    userMoveDisplay.appendChild(currentPlayerMove);

    currentCompMove.textContent = convertPlayerMoveToString(computerSelection);
    compMoveDisplay.appendChild(currentCompMove);

    // first handle a tie
	if (playerSelection === computerSelection) {
        currentResult.textContent = "Tie!";
        playerFeedbackDisplay.appendChild(currentResult);
        return null;
	}
	// conditions if player plays rock
	else if (playerSelection === 1 && computerSelection === 2) {
        currentResult.textContent = "Rock gets wrapped by paper. You lose the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return false;
	}
	else if (playerSelection === 1 && computerSelection === 3) {
        currentResult.textContent = "Rock crushes scissors. You win the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return true;
	}
	// conditions if player plays paper
	else if (playerSelection === 2 && computerSelection === 1) {
        currentResult.textContent = "Paper wraps rock. You win the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return true;
	}
	else if (playerSelection === 2 && computerSelection === 3) {
        currentResult.textContent = "Paper is cut by scissors. You lose the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return false;
	}
	// conditions if player plays scissors
	else if (playerSelection === 3 && computerSelection === 1) {
        currentResult.textContent = "Scissors is crushed by rock. You lose the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return false;
	} 
	else if (playerSelection === 3 && computerSelection === 2) {
        currentResult.textContent = "Scissors cuts paper. You win the round!";
        playerFeedbackDisplay.appendChild(currentResult);
        return true;
	}
	else {
        currentResult.textContent = "Something went wrong";
        playerFeedbackDisplay.appendChild(currentResult);
        return null;
	}
}

function scoreDisplayUpdate(winner) {
    
    if (winner === true) {
        userScore++;
        rounds++;
    }
    else if (winner === false) {
        computerScore++;
        rounds++;
    }
    else if (winner === null) {
        console.log("Nobody scores. Try that round again.");
    }

    currentPlayerScore.textContent = userScore;
    playerScoreDisplay.appendChild(currentPlayerScore);

    currentCompScore.textContent = computerScore;
    compScoreDisplay.appendChild(currentCompScore);

    currentRound.textContent = rounds;
    roundDisplay.appendChild(currentRound);
}

function showWinner() {
    if (userScore >= 5) {
        currentResult.textContent = "You win!";
        playerFeedbackDisplay.appendChild(currentResult);
        return true;
    } 
    else if (computerScore >= 5) {
        currentResult.textContent = "Computer wins!";
        playerFeedbackDisplay.appendChild(currentResult);
        return true;
    }    
    else {
        return false;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
            whoWon = playRound(convertPlayerMoveToInt(button.id), getComputerMove());
            scoreDisplayUpdate(whoWon);
            showWinner();
    });
});

