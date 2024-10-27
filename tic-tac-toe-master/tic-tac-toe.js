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
            square.addEventListener('click', () =>)
    
            {
                if (!gameState[index]) // CHECK IF THE SQUARE IS FILLED
                {
                    gameState[index] = currentPlayer; //RECORD THE PLAYER'S MOVE
                    square.textContent = currentPlayer; // SHOW THE X OR O 
                    square.classList.add(currentPlayer); //ADD CLASS FOR X OR O
                    

                    //TOGGLE TO THE OTHER PLAYER

                    currentPlayer = currentPlayer === 'X' ? 'O' 'X'
                }
            }
        }
        );
    
    });