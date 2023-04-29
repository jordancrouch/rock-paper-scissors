let choices = ["Rock", "Paper", "Scissors"];
let playerSelection;

const buttons = document.querySelectorAll(".button");

let playerScore = 0;
let computerScore = 0;

const roundOutput = document.querySelector("#round-output");
roundOutput.textContent = "Choose your weapon:";

const player = document.querySelector("#player-score");
player.textContent = `Your Score: ${playerScore}`;

const cpu = document.querySelector("#computer-score");
cpu.textContent = `Computer Score: ${computerScore}`;


function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

buttons.forEach(button => {
    button.addEventListener("click", event => {
        selection = event.target.id;
        playerSelection = selection.charAt(0).toUpperCase() + selection.slice(1);
        playGame(playerSelection);
    })
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutput.textContent = `It's a draw! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            roundOutput.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            computerScore++;
        } else {
            roundOutput.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            playerScore++;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            roundOutput.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            computerScore++;
        } else {
            roundOutput.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            playerScore++;
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            roundOutput.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            computerScore++;
        } else {
            roundOutput.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            playerScore++;
        }
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    player.textContent = `Your Score: ${playerScore}`;
    cpu.textContent = `Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        roundOutput.innerHTML = `You won the game! Play again?`;
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Your Score: ${playerScore}`;
        cpu.textContent = `Computer Score: ${playerScore}`;
    } else if (computerScore == 5) {
        roundOutput.textContent = `You lost the game! Play again?`;
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Your Score: ${playerScore}`;
        cpu.textContent = `Computer Score: ${playerScore}`;
    }
}