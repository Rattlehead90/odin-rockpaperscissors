const options = ['Rock', 'Paper', 'Scissors']; //An array containing all possible options for computer to fetch from

function computerPlay() { 
    computerSelection = options[Math.floor(Math.random() * (3))].toUpperCase(); 
    if (computerSelection === 'ROCK') {
        rockComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(41%) sepia(92%) saturate(6053%) hue-rotate(338deg) brightness(86%) contrast(96%); transform:rotate(-20deg);');
        setTimeout(clearAnimations, 500);
    }
    if (computerSelection === 'PAPER') {
        paperComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(45%) sepia(65%) saturate(2828%) hue-rotate(178deg) brightness(97%) contrast(99%); transform:rotate(-20deg);')
        setTimeout(clearAnimations, 500);
    }
    if (computerSelection === 'SCISSORS') {
        scissorsComputer.setAttribute('style', 'filter: brightness(0) saturate(100%) invert(81%) sepia(74%) saturate(5051%) hue-rotate(354deg) brightness(101%) contrast(100%); transform:rotate(-20deg);')
        setTimeout(clearAnimations, 500);
    }
    return computerSelection;

}

const battlefield = document.querySelector('.battlefield');

function logGame(playerSelection, computerSelection, winLoseIndicator) {
    const game = document.createElement('div');
    game.classList.add('game');
    const playerScore = document.createElement('div');
    playerScore.classList.add('score-interim');
    const computerScore = document.createElement('div');
    computerScore.classList.add('score-interim');

    playerScore.textContent = `${playerSelection}`;
    computerScore.textContent = `${computerSelection}`;

    battlefield.appendChild(game);
    game.appendChild(playerScore);
    game.appendChild(computerScore);

    if (winLoseIndicator === 'w') {
        game.setAttribute('style', 'background-color: #0197f6')
    } else if (winLoseIndicator === 'l') {
        game.setAttribute('style', 'background-color: #D7263D')
    } else {
        game.setAttribute('style', 'background-color: #FFBA08')
    }
}

function clearAnimations() {
    rockComputer.style.removeProperty('filter');
    rockComputer.setAttribute('style', 'transform:rotate(0deg);');
    paperComputer.style.removeProperty('filter');
    paperComputer.setAttribute('style', 'transform:rotate(0deg);');
    scissorsComputer.style.removeProperty('filter');
    scissorsComputer.setAttribute('style', 'transform:rotate(0deg);');
}

const rockPlayer = document.querySelector('.rock-player');
const paperPlayer = document.querySelector('.paper-player');
const scissorsPlayer = document.querySelector('.scissors-player');
const rockComputer = document.querySelector('.rock-computer');
const paperComputer = document.querySelector('.paper-computer');
const scissorsComputer = document.querySelector('.scissors-computer');

function playRound(playerSelection) { 
    let computerSelection = computerPlay();
    let winLoseIndicator = '';
    
    if (
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || 
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
        ) { //Winning conditions for a player
            winLoseIndicator = 'w'; //returns a winLoseIndicator
        } else if (playerSelection === computerSelection){ //Tie conditions for a player
            winLoseIndicator = 't';
        } else {
            winLoseIndicator = 'l'; //returns a winLoseIndicator
        }
        
        logGame(playerSelection, computerSelection, winLoseIndicator);
        changeScore(winLoseIndicator)

        //Decide who the winner is
        if (Number(playerScoreBox.textContent) >= 5) {
            playerScoreBox.textContent = 'WINNER';
        } else if (Number(computerScoreBox.textContent) >= 5) {
            computerScoreBox.textContent = 'WINNER';
        }
    }
    
const playerScoreBox = document.querySelector('.score-box-player');
const computerScoreBox = document.querySelector('.score-box-computer');

function changeScore(winLoseIndicator) {
    if (winLoseIndicator === 'w') {
        playerScoreBox.textContent = Number(playerScoreBox.textContent) + 1;
    } else if (winLoseIndicator === 'l') {
        computerScoreBox.textContent = Number(computerScoreBox.textContent) + 1;
    }
}


//Buttons' functionality 
rockPlayer.addEventListener('click', () => {
    playRound('ROCK');
});

paperPlayer.addEventListener('click', () => {
    playRound('PAPER');
})

scissorsPlayer.addEventListener('click', () => {
    playRound('SCISSORS');
})

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    while (battlefield.firstChild) {
        battlefield.removeChild(battlefield.lastChild);
    }
})