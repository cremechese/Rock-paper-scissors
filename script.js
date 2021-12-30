const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let message = "";
let win = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, computerPlay());
        
        document.getElementById("result").innerHTML = result;
        if (win === 2) {
            playerScore++;
        } else if(win === 0) {
            computerScore++;
        } else {
            tieScore++;
        }
        if(playerScore+computerScore+tieScore<5) {
            message = `Current score: ${playerScore}-${computerScore}-${tieScore}`;
        } else {
            message = `Final score: ${playerScore}-${computerScore}-${tieScore}<br>`;
            if(playerScore>computerScore) {
                message += `Congratulations, you win!`;
                document.body.style.background = "#3CB371";
            } else if (computerScore>playerScore) {
                message += `Oh, so sorry. You lose. Better luck next time.`;
                document.body.style.background = "#F08080";
            } else {
                message += `The game was a tie overall.`;
                document.body.style.background = "#F0E68C";
            }
            buttons.forEach((button) => {button.disabled = true;});
        }
        document.getElementById("score").innerHTML = message;
    })
});

function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    let choice = "";
    switch(rand) {
        case 0:
            choice = "Rock"
            break;
        case 1:
            choice = "Paper"
            break;
        case 2:
            choice = "Scissors"
            break;
    }
    return choice;
}

function normalizeCases(str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let lastLetters = str.slice(1).toLowerCase();
    return firstLetter+lastLetters;
}

function playRound(playerSelection, computerSelection) {
    let result = ""
    let playerNorm = normalizeCases(playerSelection);
    if(playerNorm === computerSelection) {
        result = `It's a tie! You and the computer both picked <b>${playerNorm}</b>.`
        win = 1;
    } else if (playerNorm === "Rock" && computerSelection === "Scissors") {
        result = `Computer's choice: <b>Scissors</b><br> You win! Rock beats Scissors.`
        win = 2;
    } else if (playerNorm === "Rock" && computerSelection === "Paper") {
        result = `Computer's choice: <b>Paper</b><br> You lose! Paper beats Rock.`
        win = 0;
    } else if (playerNorm === "Paper" && computerSelection === "Rock") {
        result = `Computer's choice: <b>Rock</b><br> You win! Paper beats Rock.`
        win = 2;
    } else if (playerNorm === "Paper" && computerSelection === "Scissors") {
        result = `Computer's choice: <b>Scissors</b><br> You lose! Scissors beats Paper.`
        win = 0;
    } else if (playerNorm === "Scissors" && computerSelection === "Paper") {
        result = `Computer's choice: <b>Paper</b><br> You win! Scissors beats Paper.`
        win = 2;
    } else if (playerNorm === "Scissors" && computerSelection === "Rock") {
        result = `Computer's choice: <b>Rock</b><br> You lose! Rock beats Scissors.`
        win = 0;
    } else {
        result = `You did not enter a proper option. Enter only rock, paper, or scissors.`
        win = 1;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    
    for (let i=0; i<5; i++) {
        let playerSelection = window.prompt(`Type rock, paper, or scissors in the box below. (Round ${i+1}/5)`);
        let result = playRound(playerSelection,computerPlay())
        console.log(result);
        if (win === 2) {
            playerScore++;
        } else if(win === 0) {
            computerScore++;
        } else {
            tieScore++;
        }
        if(i<4) {
            console.log(`Current score: ${playerScore}-${computerScore}-${tieScore}`);
        }
        else {
            console.log(`Final score: ${playerScore}-${computerScore}-${tieScore}`);
            if(playerScore>computerScore) {
                console.log("Congratulations, you win!");
            } else if (computerScore>playerScore) {
                console.log("Oh, so sorry. You lose. Better luck next time.");
            } else {
                console.log("The game was a tie overall.");
            }
        }
    }
}