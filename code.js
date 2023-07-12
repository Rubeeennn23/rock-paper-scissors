// Rock paper scissors 

function getComputerChoice() {
    return choice[Math.floor(Math.random()*3)];
}

function roundPlay(e,playerChoice,computerChoice) {
    if (playerCount<5 && computerCount<5) {
        for (let i=0;;++i) {
            playerChoice =  e.target.className;
            computerChoice = getComputerChoice();
            let winSentence = `You win, ${playerChoice} wins ${computerChoice}`;
            let looseSentence = `You loose, ${computerChoice} wins ${playerChoice}`;
            let drawSentence = `Try again, both showed ${computerChoice}`;
            if (playerChoice === "rock" & computerChoice === "scissors") {
                roundSentence = winSentence
                ++ playerCount
            } else if (playerChoice === "rock" & computerChoice === "paper") {
                roundSentence = looseSentence
                ++ computerCount
            } else if (playerChoice === "rock" & computerChoice === "rock") {
            roundSentence = drawSentence
            } else if (playerChoice === "paper" & computerChoice === "rock") {
                roundSentence = winSentence
                ++ playerCount
            } else if (playerChoice === "paper" & computerChoice === "scissors") {
                roundSentence = looseSentence
                ++ computerCount
            } else if (playerChoice === "paper" & computerChoice === "paper") {
                roundSentence = drawSentence
            } else if (playerChoice === "scissors" & computerChoice === "paper") {
                roundSentence = winSentence
                ++ playerCount
            } else if (playerChoice === "scissors" & computerChoice === "rock") {
                roundSentence = looseSentence
                ++ computerCount
            } else {
                roundSentence = drawSentence
            } return div.textContent = `${roundSentence}: Player ${playerCount} vs Computer ${computerCount}`
        }
    } else if (playerCount == 5) {
        div.textContent = `You win: Player ${playerCount} vs Computer ${computerCount} , you are the game master`
    } else if (computerCount == 5) {
        div.textContent =`You loose: Player ${playerCount} vs Computer ${computerCount}, you have to practice more`
    }
     
};

const choice = ["rock","paper","scissors"];
let computerChoice;
let playerChoice;
let roundSentence;
let playerCount = 0;
let computerCount = 0;
let roundResult;

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", roundPlay);

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", roundPlay); 

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", roundPlay); 

const div = document.querySelector("div");
div.textContent = 'Please choose your weapon'