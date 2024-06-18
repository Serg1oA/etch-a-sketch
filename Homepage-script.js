// create 16x16 grid of divs
const gameBox = document.querySelector("#gameBox");

function appendGameSquare() {
    const gameSquare = document.createElement("div");
    gameSquare.id = "gameSquare";
    gameBox.appendChild(gameSquare);
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        appendGameSquare();
    }
}



// hover effect (toggle a class with background color)


