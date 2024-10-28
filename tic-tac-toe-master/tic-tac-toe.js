// Exercise 1: Layout the board


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all the squares on the board
    const squares = document.querySelectorAll('#board div');

    // Add the 'square' class to each square
    squares.forEach(square => {
        square.classList.add('square');
    });
});


// Exercise 2: Add X or O to a square when clicked

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X'; // Starting with player 'X'

    squares.forEach(square => {
        square.addEventListener('click', () => 
            {
            if (!square.textContent) {  // Check if the square is empty
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);  // Add class 'X' or 'O' for styling

                // Switch to the other player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});


// Exercise 3: Change style when mouse moves over a square

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');

    squares.forEach(square => {
        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        // Remove hover effect when the mouse leaves
        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });
    });
});


// Exercise 4: Check for the winner and update the status

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    let currentPlayer = 'X';
    let gameActive = true;

    // Function to check if a player has won
    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combo of winningCombinations) 
            {
            const [a, b, c] = combo;
            if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
                gameActive = false;
                statusDiv.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                statusDiv.classList.add('you-won');
                return false;
            }
            if (squares.every(cell => cell))
            {
                return "Draw"
            }
        
        }
        return;
    };

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (gameActive && !square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
});


//Exercise 5: Restart the game

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');

    newGameButton.addEventListener('click', () => {
        squares.forEach(square => {
            square.textContent = '';       // Clear the square
            square.classList.remove('X', 'O'); // Remove X or O class
        });

        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        currentPlayer = 'X'; // Reset to player 'X'
        gameActive = true;   // Reactivate the game
    });
});

// Exercise 6: Disallow Cheating

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    let gameActive = true;

    squares.forEach(square => {
        square.addEventListener('click', () => {
            // Only allow move if the square is empty and the game is active
            if (gameActive && !square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
});
