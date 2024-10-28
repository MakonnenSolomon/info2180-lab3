// excercise 1

// awaits the DOM to load fully
document.addEventListener('DOMcontentLoaded', ()=>
{
    //select all the div elements inside the game board
    const squares = document.querySelectorAll('#board div');
    // starting player uses "x"
    let currentPlayer = 'X';
    // track the game progress
    const gameState = Array(9).fill(null);

    //loop through the squares and add "square" class
    squares.forEach
    ((square, index) =>

        {
            square.classList.add('square');
        }
    );
});

// excercise 2

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (!gameState[index]) {  // Check if square is empty
                gameState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});

// excercise 3

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (!gameState[index]) {
            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });

    square.addEventListener('mouseover', () => {
        square.classList.add('hover');
    });

    square.addEventListener('mouseout', () => {
        square.classList.remove('hover');
    });
});


// excercise 4

const status = document.getElementById('status');

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            statusElement.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
            statusElement.classList.add('you-won');
            return true;
        }
    }
    return false;
}

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (!gameState[index]) {
            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (!checkWinner()) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});


// excercise 5
document.getElementById('new-game').addEventListener('click', () => {
    gameState.fill(null);
    squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('X', 'O');
    });

    statusElement.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusElement.classList.remove('you-won');
    currentPlayer = 'X';
});