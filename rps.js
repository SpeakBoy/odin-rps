let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice()
{
    const humanChoice = prompt(
        "Please enter your choice (rock, paper, scissors):"
    );
    return humanChoice;
}

function playRound(humanChoice, computerChoice)
{
    // This ensures that correct user input will function,
    // regardless of whether it is intially upper- or lower-case.
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice)
    {
        alert("Draw!");
        return;
    }

    switch (humanChoice)
    {
        case "rock":
            if (computerChoice === "scissors")
            {
                alert("You win! Rock beats Scissors!");
                humanScore++;
            }
            else
            {
                alert("You lose! Paper beats Rock!");
                computerScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock")
            {
                alert("You win! Paper beats Rock!");
                humanScore++;
            }
            else
            {
                alert("You lose! Scissors beats Paper!");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper")
            {
                alert("You win! Scissors beats Paper!");
                humanScore++;
            }
            else
            {
                alert("You lose! Rock beats Scissors!");
                computerScore++;
            }
            break;
    }
}