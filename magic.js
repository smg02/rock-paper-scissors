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
    gameResult.classList="winner"
    
    let choicesShow = document.querySelector(".choices");
    let resultShow = document.querySelector(".result");

    let humanScoreDisplay = document.querySelector(".humanScoreDisplay");
    let computerScoreDisplay = document.querySelector(".computerScoreDisplay");

    if (humanChoice === computerChoice) {
        result = "Draw!";
        resultShow.setAttribute("style", "color:white");
    } else if (((humanChoice === "Rock") && (computerChoice === "Scissors")) ||
        ((humanChoice === "Paper") && (computerChoice === "Rock")) ||
        ((humanChoice === "Scissors") && (computerChoice === "Paper"))) {
        humanScore++;
        result = "You Win!";
        resultShow.setAttribute("style", "color:#96c4b2");
    } else {
        computerScore++;
        result = "You Lose!";
        resultShow.setAttribute("style", "color:#a9bdb9");
    }
    choicesShow.textContent = `${humanChoice} vs ${computerChoice}`

    resultShow.textContent = `${result}`

    humanScoreDisplay.textContent = `You - ${humanScore}`

    computerScoreDisplay.textContent = `Opponent - ${computerScore}`

    if (humanScore >= 3 || computerScore >= 3) {
        if (computerScore == humanScore) {
            gameResult.textContent = "Tie"
        } else if (humanScore >= 3) {
            gameResult.textContent = "Victory!"
            gameResult.setAttribute("style", "color:#6DC5D1");
        } else if (computerScore >= 3) {
            gameResult.textContent = "Defeat!"
            gameResult.setAttribute("style", "color:#FF033E");
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
