const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() {
    let randomlyGeneratedIndex = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //A randomly generated index to use with options array
    return options[randomlyGeneratedIndex(0, 2)].toUpperCase(); //Fetching an option from the array, combining the randomlyGeneratedIndex and options
}





function playRound() { 
    let playerSelection = prompt('Choose Rock, Paper or Scissors: ').toUpperCase();
    let playerSelectionToDisplay = playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase();
    let computerSelection = computerPlay();
    let computerSelectionToDisplay = computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase();

    if ((playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')) {
        return `You win! ${playerSelectionToDisplay} beats ${computerSelectionToDisplay}`;
    } else if ((computerSelection === 'PAPER' && playerSelection === 'ROCK') || (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')){
        return `You lose! ${computerSelectionToDisplay} beats ${playerSelectionToDisplay}`;
    } else {
        return `It's a tie! ${computerSelectionToDisplay} and ${playerSelectionToDisplay}`;
    }
}