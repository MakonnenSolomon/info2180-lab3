// excercise 1

// awaits the DOM to load fully
document.addEventListener('DOMcontentLoaded', ()=>
{
    //select all the div elements inside the game board
    const squares = document.querySelectorAll('#board div');

    //loop through the squares and add "square" class
    squares.forEach
    (square =>

        {
            square.classList.add('square');
        }
    );
});