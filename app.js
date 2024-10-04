let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

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

getComputerChoice();

function getHumanChoice() {
    humanChoice=prompt("What's your choice");
    return (humanChoice.toLowerCase());
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice==='rock' && computerChoice==='paper') || (humanChoice==='paper' && computerChoice==='scissors') || (humanChoice==='scissors' && computerChoice==='rock')) {
        console.log("You loose! "+ computerChoice +"beats "+ humanChoice );
    }
    else if ((computerChoice==='rock' && humanChoice==='paper') || (computerChoice==='paper' && humanChoice==='scissors') || (computerChoice==='scissors' && humanChoice==='rock')) {
        console.log("You win! "+humanChoice+"beats "+computerChoice);
    }
    else {
        console.log("Round tied!")
    }
} 


 