let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
    let computerChoice = Math.ceil(Math.random() * 3);
    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
};

let getHumanChoice = function() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
};

let playRound = function(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = "Draw!";
    } else if (((humanChoice === "rock") && (computerChoice === "scissors")) ||
                ((humanChoice === "paper") && (computerChoice === "rock")) ||
                ((humanChoice === "scissors") && (computerChoice === "paper"))) {
        humanScore++;
        result = "You Win!";
    } else {
        computerScore++;
        result = "You Lose!";
    }
    console.log(`
    You Chose      - ${humanChoice}
    Computer Chose - ${computerChoice}
    Result         - ${result}

        -- Score --

    Your Score     - ${humanScore}
    Computer Score - ${computerScore}
    `)
};

let playGame = function() {
    for (let i = 1; i <= 5; i++) {
        console.log("--------   Round ", i, "  ---------");
        const a = getHumanChoice();
        const b = getComputerChoice();
        playRound(a,b);

        if (humanScore >= 3) {
            console.log("You Won the Game");
        } else if (computerScore >= 3) {
            console.log("Computer Won the Game");
            break;
        } else if (i == 5) {
            if (computerScore > humanScore) {
                console.log("Computer Won the Game");
            } else if (computerScore == humanScore) {
                console.log("Draw Game");
            } else {
                console.log("You Won the Game!")
            }
        } else {
            continue;
        }
    }
};

playGame();


