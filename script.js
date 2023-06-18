const start = document.querySelector(".start")
const gridSquare = document.querySelector(".board")
const statusDisplay = document.querySelector(".winning-message")
const player_X = "X";
const player_O = "O";
let currentPlayer = player_X
let gameActive = false 
let gameState = ["","", "", "", "", "", "", "", "", ] // move this into game function


const winningMessage = () => `${currentPlayer} has won`;
const drawMessage = () => `Game ended in a draw`;
const currentPlayerTurn = () => `It is ${currentPlayer}'s turn`

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


function handleResultValidation() {
    let roundWon = false;
    let draw = !gameState.includes(""); //true if no empty string found in array
    
    for (let i = 0; i<=7; i++) {
        //check if the keys a, b, c all match? If so, they meet one of the winning conditions in the array
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    };

    if (roundWon) {
        statusDisplay.textContent = winningMessage();
        start.textContent = "Start new game"
        gameActive = false;
        return;
            }


    if (draw) {
        statusDisplay.textContent = drawMessage();
        start.textContent = "Start new game"
        gameActive = false;
        return;
    }

    handlePlayerChange()


};


function handlePlayerChange() {
    currentPlayer = currentPlayer === player_X ? player_O : player_X;
    statusDisplay.textContent = currentPlayerTurn()
}


// Initialise game - Display the grid with start game button
start.addEventListener("click", () => {
    gameActive = true;
    gameState = ["","", "", "", "", "", "", "", "", ];
    document.querySelectorAll(".cell")
                .forEach(cell => cell.textContent = "")
    currentPlayer = player_X
    
    
    start.textContent = "Restart"
    gridSquare.setAttribute("style", "display: grid")   
    
})


//Game logic - wrapped in an IIFE
(function () {gridSquare.addEventListener("click", e => {
    let clickedCell = e.target
    let clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))
    if (gameActive) {
    statusDisplay.textContent = currentPlayerTurn()
    
    if (clickedCell.textContent === "" && clickedCell.textContent != "x" && clickedCell.textContent != "O" ) {
        clickedCell.textContent = currentPlayer
        gameState[clickedCellIndex] = currentPlayer;
        
    }
        
        handleResultValidation()
         
        

    }
})}())



