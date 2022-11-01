
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const items = ["rock", "paper", "scissors"];
    const random = items[Math.floor(Math.random() * items.length)];
     return random;
    }
    
    
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "You win, excellent!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "You win, excellent!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "You win, excellent!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    } 
    else {
       return "It's a draw =/";
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose your weapon: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore){
        return "You have won this war!";
    }
    else if ( playerScore < computerScore){
        return "The computer is the victor!";
    }
    else{
        return "It's a draw, try it again!";
    }
}

console.log(game());
