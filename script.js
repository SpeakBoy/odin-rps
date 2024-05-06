let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");
const choiceContainer = document.querySelector(".choice-container");
const startBtn = document.querySelector(".start-button");
const selectionText = document.querySelector(".selection-text");
const roundResult = document.querySelector(".round-result");

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
    choiceContainer.style.display = "flex";
    selectionText.textContent = "Please make a selection.";
    roundResult.textContent = "";
    updateScore();
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
        roundResult.textContent = "It's a draw!";
    } else if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        roundResult.textContent =
            "You win, " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
    } else {
        roundResult.textContent =
            "You lose, " + computerChoice + " beats " + humanChoice + "!";
        computerScore++;
    }

    updateScore();

    if (humanScore >= 5 || computerScore >= 5) {
        decideWinner();
        resetScore();
    }
}

function decideWinner() {
    if (humanScore > computerScore) {
        roundResult.textContent = "You win! Congratulations!";
    } else {
        roundResult.textContent = "You lose! Better luck next time!";
    }
    choiceContainer.style.display = "none";
    startBtn.style.display = "flex";
    selectionText.textContent = "Click the button to play again.";
    startBtn.textContent = "Play again";
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
}

function updateScore() {
    const humanScoreElement = document.querySelector(".human-score-value");
    const computerScoreElement = document.querySelector(
        ".computer-score-value"
    );

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
}
