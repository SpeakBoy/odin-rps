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
    const humanChoice = prompt("Please enter your choice (rock, paper, scissors):");
    return humanChoice;
}