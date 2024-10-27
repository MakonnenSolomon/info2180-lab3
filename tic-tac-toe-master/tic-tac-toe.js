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
