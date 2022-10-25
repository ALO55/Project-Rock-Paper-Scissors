const items = ["Rock", "Paper", "Scissors"];
let playerSelection = ("RoCK").toLowerCase();

function getComputerChoice(items) {
    return items[Math.floor(Math.random() * items.length)]; 
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "Scissors"){
        return "You win, excellent!";
    }
    else if (playerSelection === "rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        return "You win, excellent!";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper"){
        return "You win, excellent!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } 
    else {
       return "It's a draw =/";
    }
}


