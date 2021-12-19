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

console.log(computerPlay());
