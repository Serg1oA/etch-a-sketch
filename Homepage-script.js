// selectors + 
const gameBox = document.querySelector("#gameBox");
const squaresInput = document.querySelector("#squaresInput");
const submitSquaresInput = document.querySelector("#submitSquaresInput");
let isClicked = false;

// when button is clicked => clean the board, use input to create squares
submitSquaresInput.addEventListener("click", function() {
    boardCleaner();

    if (squaresInput.value > 0 && squaresInput.value < 100) {
        squares = squaresInput.value;
        squaresInput.value = "";

    }
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++) {
            appendGameSquare();
        }
    }
});

// function to clean the board
function boardCleaner() {
    const squaresToRemove = document.querySelectorAll("#gameSquare");
    squaresToRemove.forEach(square => {
        square.remove();
    });
}

/* function to create game squares (and give them a variable flexBasis
   property, so that the game board is always a square of squares) */
function appendGameSquare() {
    const gameSquare = document.createElement("div");
    gameSquare.id = "gameSquare";

    gameSquare.addEventListener("mousedown", function() {
        isClicked = true;
        gameSquare.classList.add("highlight");
        
    });

    gameSquare.addEventListener("mouseenter", function() {
        if (isClicked === true) {
            gameSquare.classList.add("highlight");
        };
    });

    gameSquare.addEventListener("mouseup", function() {
        isClicked = false;
    });

    gameSquare.style.flexBasis = `calc(100% / ${squares})`;
    gameBox.appendChild(gameSquare);
}