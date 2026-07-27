let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound(rockBtn.id, getComputerChoice()));
paperBtn.addEventListener("click", () => playRound(paperBtn.id, getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound(scissorsBtn.id, getComputerChoice()));

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
        console.log("Draw!");
        return;
    }

    switch (humanChoice)
    {
        case "rock":
            if (computerChoice === "scissors")
            {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            }
            else
            {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock")
            {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            }
            else
            {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper")
            {
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            }
            else
            {
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
            }
            break;
    }
}