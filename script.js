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
        const humanInput = prompt(
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsRemaining = 5;

    while (roundsRemaining > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundsRemaining--;
    }

    decideWinner();

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
            alert(
                "You lose, " + computerChoice + " beats " + humanChoice + "!"
            );
            computerScore++;
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
}
