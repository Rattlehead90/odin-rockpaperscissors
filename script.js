const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() {
    let randomlyGeneratedIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //A randomly generated index to use with options array
    return options[randomlyGeneratedIndex(0, 2)].toUpperCase(); //Fetching an option from the array, combining the randomlyGeneratedIndex and options
}

function playRound(playerSelection, computerSelection) { 
    playerSelection = prompt('Choose Rock, Paper or Scissors: ').toUpperCase();
    computerSelection = computerPlay();

    if ((playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection === 'PAPER' && playerSelection === 'ROCK') || (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a tie! ${computerSelection} and ${playerSelection}`;
    }
}