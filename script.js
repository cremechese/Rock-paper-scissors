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
        result = `It's a tie! You both picked ${playerNorm}.`
    } else if (playerNorm === "Rock" && computerSelection === "Scissors") {
        result = `You win! Rock beats Scissors.`
    } else if (playerNorm === "Rock" && computerSelection === "Paper") {
        result = `You lose! Paper beats Rock.`
    } else if (playerNorm === "Paper" && computerSelection === "Rock") {
        result = `You win! Paper beats Rock.`
    } else if (playerNorm === "Paper" && computerSelection === "Scissors") {
        result = `You lose! Scissors beats Paper.`
    } else if (playerNorm === "Scissors" && computerSelection === "Paper") {
        result = `You win! Scissors beats Paper.`
    } else if (playerNorm === "Scissors" && computerSelection === "Rock") {
        result = `You lose! Rock beats Scissors.`
    }

    return result;
}