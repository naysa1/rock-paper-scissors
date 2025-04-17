function playGame(move) {
    let result = '';
    let computer_move = computerMove();
    document.querySelector('.computer-move').innerHTML = `Computer moved: ${computer_move}`;
    if (move === 'Rock') {
        if (computer_move === 'Rock') {
            result = 'Tie!';
        } else if (computer_move === 'Paper') {
            result = 'You Lost!';
        } else if (computer_move === 'Scissors') {
            result = 'You Won!';
        }
    } else if (move === 'Paper') {
        if (computer_move === 'Rock') {
            result = 'You Won!';
        } else if (computer_move === 'Paper') {
            result = 'Tie!';
        } else if (computer_move === 'Scissors') {
            result = 'You Lost!';
        }
    } else if (move === 'Scissors') {
        if (computer_move === 'Rock') {
            result = 'You Lost!';
        } else if (computer_move === 'Paper') {
            result = 'You Won!';
        } else if (computer_move === 'Scissors') {
            result = 'Tie!';
        }
    }
    document.querySelector('.result').innerHTML = result;
    calculateScore(result);
}
const game_score = {
    wins: 0,
    loses: 0,
    ties: 0,
};

function calculateScore(result) {
    if (result === 'You Won!') {
        game_score.wins++;
    } else if (result === 'You Lost!') {
        game_score.loses++;
    } else if (result === 'Tie!') {
        game_score.ties++;
    } else if (result === 'Reset') {
        game_score.wins = 0;
        game_score.loses = 0;
        game_score.ties = 0;
    }
    const scoreString = JSON.stringify(game_score);
    localStorage.setItem('score', scoreString);
    const storedScoreString = localStorage.getItem('score');
    const storedScoreData = JSON.parse(storedScoreString);
    document.querySelector('.score').innerHTML = `Wins: ${storedScoreData.wins} Losses: ${storedScoreData.loses} Ties: ${storedScoreData.ties}`;
}

function computerMove() {
    const randomNum = Math.random();
    let computerMove = '';
    if (randomNum >= 0 && randomNum < 1/3) {
        computerMove = 'Rock';
    } else if (randomNum >= 1 / 3 && randomNum < 2/3) {
        computerMove = 'Paper';
    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}