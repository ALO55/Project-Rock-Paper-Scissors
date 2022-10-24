const items = ["Rock", "Paper", "Scissors"];


function getComputerChoice(items) {
    return items[Math.floor(Math.random() * items.length)]; 
}
