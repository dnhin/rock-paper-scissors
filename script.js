function playRound(playerSelection, computerSelection) {
    let userAnswer = prompt('Rock, Paper or Scissors?: ').toLowerCase();
    playerSelection = userAnswer;

    let answers = ['Rock', 'Paper', 'Scissors'];
    let randomAnswers = answers[Math.floor(Math.random() * answers.length)];
    computerSelection = randomAnswers;

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return "Its a tie!";
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return "Its a tie!";
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return "Its a tie!";
    } else {
        return "Wrong user input!";
    }
}

function game() {
    for(i=0; i<5; i++) {
        console.log(playRound());
    }
}

/*
function game() {
    let count = 1;
    while (count < 6) {
        console.log(playRound());
        count++;
}
}
*/