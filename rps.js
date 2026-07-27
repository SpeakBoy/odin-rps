let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound(rockBtn.id, getComputerChoice()));
paperBtn.addEventListener("click", () => playRound(paperBtn.id, getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound(scissorsBtn.id, getComputerChoice()));

const currentResultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");

function getComputerChoice()
{
    const randChoice = Math.floor(Math.random() * 3);
    switch (randChoice)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        currentResultDisplay.textContent = "Draw!";
        displayResult();
        return;
    }

    switch (humanChoice)
    {
        case "rock":
            if (computerChoice === "scissors")
            {
                currentResultDisplay.textContent = "You win! Rock beats Scissors!";
                humanScore++;
            }
            else
            {
                currentResultDisplay.textContent = "You lose! Paper beats Rock!";
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock")
            {
                currentResultDisplay.textContent = "You win! Paper beats Rock!";
                humanScore++;
            }
            else
            {
                currentResultDisplay.textContent = "You lose! Scissors beats Paper!";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper")
            {
                currentResultDisplay.textContent = "You win! Scissors beats Paper!";
                humanScore++;
            }
            else
            {
                currentResultDisplay.textContent = "You lose! Rock beats Scissors!";
                computerScore++;
            }
            break;
    }
    displayResult();
}

function displayResult()
{
    scoreDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore >= 5)
    {
        winnerDisplay.textContent = "You win!";
    }
    else if (computerScore >= 5)
    {
        winnerDisplay.textContent = "You lose!";
    }
}