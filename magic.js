let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function () {
    let computerChoice = Math.ceil(Math.random() * 3);
    if (computerChoice === 1) {
        return "Rock"
    } else if (computerChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

let playRound = function (humanChoice, computerChoice) {
    let result;
    const container = document.querySelector(".container");
    const gameResult = document.createElement("div")

    if (humanChoice === computerChoice) {
        result = "Draw!";
    } else if (((humanChoice === "Rock") && (computerChoice === "Scissors")) ||
        ((humanChoice === "Paper") && (computerChoice === "Rock")) ||
        ((humanChoice === "Scissors") && (computerChoice === "Paper"))) {
        humanScore++;
        result = "You Win!";
    } else {
        computerScore++;
        result = "You Lose!";
    }
    let choicesShow = document.querySelector(".choices");
    choicesShow.textContent = `${humanChoice} vs ${computerChoice}`

    let resultShow = document.querySelector(".result");
    resultShow.textContent = `${result}`

    let scoreShow = document.querySelector(".score");
    scoreShow.textContent = `Your Score - ${humanScore}, Computer Score - ${computerScore}`

    if (humanScore >= 3 || computerScore >= 3) {
        if (computerScore == humanScore) {
            gameResult.textContent = "Tie"
        } else if (humanScore >= 3) {
            gameResult.textContent = "Victory!"
        } else if (computerScore >= 3) {
            gameResult.textContent = "Defeat!"
        }
        humanScore = 0;
        computerScore = 0;
        container.appendChild(gameResult)
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button)=> button.remove())

        const reload = document.createElement("button")
        reload.textContent="Play Again"
        container.appendChild(reload)

        reload.addEventListener("click", () => location.reload())
    }
};

const button_one = document.getElementById("btn-1");
button_one.addEventListener("click", () => playRound("Rock", getComputerChoice()));


const button_two = document.getElementById("btn-2");
button_two.addEventListener("click", () => playRound("Paper", getComputerChoice()));

const button_three = document.getElementById("btn-3");
button_three.addEventListener("click", () => playRound("Scissors", getComputerChoice()));
