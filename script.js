let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");

const startBtn = document.querySelector(".start-button");

startBtn.addEventListener("click", startGame);

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});
paperBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});
scissorsBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});

function startGame() {
    startBtn.style.display = "none";
}

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

    const humanScoreElement = document.querySelector(".human-score-value");
    const computerScoreElement = document.querySelector(
        ".computer-score-value"
    );

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    if (humanScore >= 5 || computerScore >= 5) {
        decideWinner();
        resetScore();
    }
}

function decideWinner() {
    if (humanScore > computerScore) {
        alert(
            "You win, " +
                humanScore +
                " to " +
                computerScore +
                "! Congratulations!"
        );
    } else if (computerScore > humanScore) {
        alert(
            "You lose, " +
                humanScore +
                " to " +
                computerScore +
                "! Better luck next time!"
        );
    } else {
        alert(
            "It's a draw, " +
                humanScore +
                " to " +
                computerScore +
                "! Almost won!"
        );
    }
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}
