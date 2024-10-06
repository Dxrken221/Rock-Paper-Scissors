let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let result;
let noOfRounds;
let displayResult = document.getElementById("result");
let human_score = document.getElementById("human_score");
let computer_score = document.getElementById("computer_score");

//getting computer choice
function getComputerChoice() {
    computerChoice = Math.random();

    if (computerChoice < 0.33) {
        return ("rock");
    }
    else if (computerChoice >= 0.33 && computerChoice < 0.66) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}


//--------- button function ---------
function rockFunction() {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function paperFunction() {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function scissorsFunction() {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", rockFunction);
paper.addEventListener("click", paperFunction);
scissors.addEventListener("click", scissorsFunction);


noOfRounds = prompt("What is the score limit that you wish to play?");
noOfRounds = parseInt(noOfRounds, 10);

//playing function and logic
function playRound(humanChoice, computerChoice) {
    // computerChoice = getComputerChoice();

    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        displayResult.textContent = "You loose! " + computerChoice + " beats " + humanChoice;
        computerScore += 1;
    }
    else if ((computerChoice === 'rock' && humanChoice === 'paper') || (computerChoice === 'paper' && humanChoice === 'scissors') || (computerChoice === 'scissors' && humanChoice === 'rock')) {
        displayResult.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore += 1;
    }
    else {
        displayResult.textContent = "Round tied!";
    }


    human_score.textContent = humanScore;
    computer_score.textContent = computerScore;

    if (humanScore >= noOfRounds) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore >= noOfRounds) {
        alert("You lose the game!");
        resetGame();
    }

}


// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    human_score.textContent = humanScore;
    computer_score.textContent = computerScore;
    displayResult.textContent = "Game reset. Play again!";
}
