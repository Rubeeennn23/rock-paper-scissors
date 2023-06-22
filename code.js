// Rock paper scissors 
// 1 - The computer selects one of the options randomly: Rock, Paper OR Scissors
    const Choice = ["rock","paper","scissors"];
    let computerChoice = getComputerChoice();
    function getComputerChoice() {
        return Choice[Math.floor(Math.random()*3)];
    }
// 2 - The player selects one of the options: Rock, Paper OR Scissors - we should make it case-insensitive
let playerChoice=prompt("Choose rock, paper or scissors:");
function round (playerChoice,computerChoice) {
    if (playerChoice === "rock" & computerChoice === "scissors") {
        return "You win, rock beats paper"
    } else if (playerChoice === "rock" & computerChoice === "paper") {
        return "You loose, paper beats rock"
    } else if (playerChoice === "rock" & computerChoice === "rock") {
        return "Draw, both are rocks"
    } else if (playerChoice === "paper" & computerChoice === "rock") {
        return "You win, paper beats rock"
    } else if (playerChoice === "paper" & computerChoice === "scissors") {
        return "You loose, scissors beats paper"
    } else if (playerChoice === "paper" & computerChoice === "paper") {
        return "Draw, both are papers"
    } else if (playerChoice === "scissors" & computerChoice === "paper") {
        return "You win, scissors beats paper"
    } else if (playerChoice === "scissors" & computerChoice === "rock") {
        return "You loose, rock beats scissors"
    } else {
        return "Draw, both are papers"
    } return result
}
  
// 3 - The algorithm compares both sellections and returns a result based on those conditions: rock wins scissors, scissors wins paper, paper wins rock. If both selections are the same, the result will be draw
// 