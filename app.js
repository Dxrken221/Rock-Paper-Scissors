let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let result;
let noOfRounds;

function getComputerChoice() {
    computerChoice= Math.random();

    if (computerChoice<0.33) {
        return ("rock");
    }
    else if (computerChoice>=0.33 && computerChoice<0.66) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getHumanChoice() {
    humanChoice=prompt("What's your choice (rock/paper/scissors)");
    return (humanChoice.toLowerCase());
}

noOfRounds = prompt("How many rounds do you wish to play?");
noOfRounds = parseInt(noOfRounds, 10);

function playRound(humanChoice, computerChoice) {
    if ((humanChoice==='rock' && computerChoice==='paper') || (humanChoice==='paper' && computerChoice==='scissors') || (humanChoice==='scissors' && computerChoice==='rock')) {
        console.log("You loose! "+ computerChoice +" beats "+ humanChoice );
        result = "loss"
    }
    else if ((computerChoice==='rock' && humanChoice==='paper') || (computerChoice==='paper' && humanChoice==='scissors') || (computerChoice==='scissors' && humanChoice==='rock')) {
        console.log("You win! "+humanChoice+" beats "+computerChoice);
        result = "win"
    }
    else {
        console.log("Round tied!");
        result = "draw"
    }
    if (result === "win"){
        humanScore = humanScore + 1;
        return humanScore;
    }
    else if (result === "loss"){
        computerScore = computerScore + 1;
        return computerScore;
    }
}


for (let i=0; i<noOfRounds; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
console.log("Your score = " +humanScore);
console.log("Computer's score = "+computerScore);

if (humanScore>computerScore) {
    console.log("You Win!");
}
else if (computerScore>humanScore) {
    console.log("You Lose! Better luck next time")
}
else {
    console.log("Its a tie!");
}

 