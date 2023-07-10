// Rock paper scissors 
// 1 - The computer selects one of the options randomly: Rock, Paper OR Scissors

function getComputerChoice() {
    return choice[Math.floor(Math.random()*3)];
}

// 2 - The player selects one of the options: Rock, Paper OR Scissors - we should make it case-insensitive

/*let playerChoiceCase=prompt("Choose rock, paper or scissors:");
let playerChoice = playerChoiceCase.toLowerCase();*/




// 3 - Write a function that plays a single round of the game, the function should have 2 parameters: playerSelection and computerSelection

function roundPlay (playerChoice,computerChoice) {
    if (playerChoice === "rock" & computerChoice === "scissors") {
        roundSentence = winSentence
        playerCount ++
    } else if (playerChoice === "rock" & computerChoice === "paper") {
        roundSentence = looseSentence
        computerCount ++
    } else if (playerChoice === "rock" & computerChoice === "rock") {
       roundSentence = drawSentence
    } else if (playerChoice === "paper" & computerChoice === "rock") {
        roundSentence = winSentence
        playerCount ++
    } else if (playerChoice === "paper" & computerChoice === "scissors") {
        roundSentence = looseSentence
        computerCount ++
    } else if (playerChoice === "paper" & computerChoice === "paper") {
        roundSentence = drawSentence
    } else if (playerChoice === "scissors" & computerChoice === "paper") {
        roundSentence = winSentence
        playerCount ++
    } else if (playerChoice === "scissors" & computerChoice === "rock") {
        roundSentence = looseSentence
        computerCount ++
    } else {
        roundSentence = drawSentence
    } return {
        roundSentence,
        playerCount,
        computerCount
    }
};

// 4 - Write a new function called game(). Use the previous function inside of this one to play a 5 round game that keeps the score an reports a winner and looser at the end
// We don't know how to create loops right now, repeat the function 5 times. 
// We can display the result using console log of each round and the winner in the end
// Use prompt() to get the input from the user
// Change the previous function if needed, specially the return value 
// If needed, create more helper functions that could be useful

/*function game() {

    roundResult = roundPlay(playerChoice,computerChoice,playerCount,computerCount);
    console.log(roundResult);
    alert(`Player ${playerCount} vs Computer ${computerCount}`)
    computerChoice = getComputerChoice();
    playerChoiceCase=prompt("Choose rock, paper or scissors:");
    playerChoice = playerChoiceCase.toLowerCase();

    roundResult = roundPlay(playerChoice,computerChoice,playerCount,computerCount);
    console.log(roundResult)
    alert(`Player ${playerCount} vs Computer ${computerCount}`)
    computerChoice = getComputerChoice();
    playerChoiceCase=prompt("Choose rock, paper or scissors:");
    playerChoice = playerChoiceCase.toLowerCase();

    roundResult = roundPlay(playerChoice,computerChoice,playerCount,computerCount);
    console.log(roundResult)
    alert(`Player ${playerCount} vs Computer ${computerCount}`)
    computerChoice = getComputerChoice();
    playerChoiceCase=prompt("Choose rock, paper or scissors:");
    playerChoice = playerChoiceCase.toLowerCase();

    roundResult = roundPlay(playerChoice,computerChoice,playerCount,computerCount);
    console.log(roundResult)
    alert(`Player ${playerCount} vs Computer ${computerCount}`)
    computerChoice = getComputerChoice();
    playerChoiceCase=prompt("Choose rock, paper or scissors:");
    playerChoice = playerChoiceCase.toLowerCase();

    roundResult = roundPlay(playerChoice,computerChoice,playerCount,computerCount);
    console.log(roundResult)
    alert(`Player ${playerCount} vs Computer ${computerCount}`)
    if (playerCount > computerCount) {
        alert("You win, you are the game master")
    } else if (playerCount < computerCount) {
        alert("You loose, try it again")
    } else {
        alert("You tie, you have to practice more")
    } return {
        playerCount, 
        computerCount
    }
}

console.log(game()); */

const choice = ["rock","paper","scissors"];
let computerChoice = getComputerChoice();
let playerChoice='';
let winSentence = `You win, ${playerChoice} wins ${computerChoice}`;
let looseSentence = `You loose, ${computerChoice} wins ${playerChoice}`;
let drawSentence = `Try again, both showed ${playerChoice}`;
let roundSentence;
let playerCount = 0;
let computerCount = 0;
let roundResult;

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click",(e) => {
    return console.log(roundPlay("rock",computerChoice));
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click",(e) => {
    console.log(roundPlay("paper",computerChoice));
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click",(e) => {
    console.log(roundPlay("scissors",computerChoice));
});