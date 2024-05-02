let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = parseInt(Math.random() * 3); // "Randomly" chooses a number between 0 and 2.
    let computerChoice;
    if (randomChoice === 0) {
        computerChoice = "rock";
    } else if (randomChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice;
    while (humanChoice === undefined) {
        let humanInput = prompt(
            "Please input your choice (rock, paper, scissors): "
        );
        if (humanInput.toLowerCase() === "rock") {
            humanChoice = "rock";
        } else if (humanInput.toLowerCase() === "paper") {
            humanChoice = "paper";
        } else if (humanInput.toLowerCase() === "scissors") {
            humanChoice = "scissors";
        } else {
            alert("Invalid input.");
        }
    }

    return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a draw!");
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        alert("You win, " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    } else {
        alert("You lose, " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

playRound(humanSelection, computerSelection);
