
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = getComputerChoice();
let result = document.querySelector('.result');
result.textContent = '';
let showPlayerPoints = document.querySelector('.playerScore');
showPlayerPoints.textContent = 'Player';
let showComputerPoints = document.querySelector('.computerScore');
showComputerPoints.textContent = 'Computer';
let comments = document.querySelector('.comments');
comments.textContent = 'Good luck!';
let gameOver = false;

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
    else if (playerSelection === computerSelection){
       return "It's a draw =/";
    }
    else{ return 'Error'}
}

const buttons = document.querySelectorAll('img');
buttons.forEach((button) =>{
    button.addEventListener('click', function  game(){
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        if (gameOver === false){
        result.textContent = playRound(playerSelection, computerSelection);}

        showPlayerPoints.textContent = 'Player ' + playerScore;
        showComputerPoints.textContent = 'Computer ' + computerScore;

        if(result.textContent === "You win, excellent!"){
            switch(playerScore){
                case 1:
                    comments.textContent = 'Well done you have won the first round';
                    break;
                case 2:
                    comments.textContent = 'Nice keep it this way';
                    break;
                case 3:
                    comments.textContent = 'You Can do this =)';
                    break;
                case 4:
                    comments.textContent = 'One more and you win this battle';
                    break;
                case 5:
                    openPopup();
                    document.querySelector('.winner').textContent = 'Well done you beat the computer ;D';
                    endGame()
                    break;
                }
        } 
        else if(result.textContent === "You lose! Paper beats Rock" || result.textContent === "You lose! Scissors beats Paper" 
        || result.textContent === "You lose! Rock beats Scissors"){
            switch(computerScore){
                case 1:
                    comments.textContent = "A simple mistake, don't worry";
                    break;
                case 2:
                    comments.textContent = "It's just 2 points keep fighting";
                    break;
                case 3:
                    comments.textContent = 'Be careful the computer have 3 points';
                    break;
                case 4:
                    comments.textContent = 'Warning 1 more point and you will lose';
                    break;
                case 5:
                    openPopup();
                    document.querySelector('.winner').textContent = 'You were defeat by the computer =(';
                    endGame()
                    break;
            }
        }
      });
});

// this part show a message when someone get the 5 points
let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add('open-popup');
}

function endGame(){
    gameOver = true;
}

//code to restart the game 
const restart = document.querySelector('.restart');
restart.addEventListener('click', () =>{
  popup.classList.remove('open-popup');
  playerScore = 0;
  computerScore = 0;
  playerSelection = '';
  computerSelection = getComputerChoice();
  result.textContent = '';
  showPlayerPoints.textContent = 'Player';
  showComputerPoints.textContent = 'Computer';
  comments.textContent = 'Good luck!';
  gameOver = false;
});