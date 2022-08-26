window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.title'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '',''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PlayerX_Won';
    const PLAYERO_WON = 'PlayerO_Won';
    const TIE = 'Tie'

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            title.innerText = currentPlayer;
            title.class.list.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    tiles.forEach( (tile, index) => {
        title.addEventListener('click', () => userAction(title, index));
    })

    resetButton.addEventListener('click', resetBoard);
})