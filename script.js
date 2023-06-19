const start = document.querySelector(".start")
const gridSquare = document.querySelector(".board")
const statusDisplay = document.querySelector(".winning-message")
const player_X = "X";
const player_O = "O";
let currentPlayer = player_X
let gameActive = false 
let gameState = ["","", "", "", "", "", "", "", "", ] 


const winningMessage = () => `${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
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

// Initialise game - Display the grid with start game button
function initializeGame() {
    gameActive = true;
    gameState = ["","", "", "", "", "", "", "", "", ];
    document.querySelectorAll(".cell")
                .forEach(cell => cell.textContent = "")
    currentPlayer = player_X
    statusDisplay.textContent = currentPlayerTurn()
    start.textContent = "Restart"
    gridSquare.setAttribute("style", "display: grid")   
    
};

/* Get a random choice from the available spots on the board */
function getAiChoice() {
    const availableSpots = [];
    for (let i=0; i < gameState.length; i++) {
        if (gameState[i] === "") {
            availableSpots.push(i);
        }
    }
    const randomIndex = Math.floor(Math.random() * availableSpots.length);
    const aiChoice = availableSpots[randomIndex]
    return aiChoice
}


function makeAiMove() {
    if (!gameActive) {
        return;
    }    
    const aiChoice = getAiChoice();
    gameState[aiChoice] = player_O;
    const aiCell = document.querySelector(`[data-cell-index="${aiChoice}"]`);
    aiCell.textContent = player_O;
    aiCell.style.color = "red";
    handleResultValidation()    
}


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


function handleCellClick(e) {
    let clickedCell = e.target
    let clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))
    
    if (gameActive && currentPlayer == player_X && gameState[clickedCellIndex] === "") {
        statusDisplay.textContent = currentPlayerTurn();
        
        clickedCell.style.color = "green";
        clickedCell.textContent = currentPlayer
        gameState[clickedCellIndex] = currentPlayer;
        handleResultValidation()
        setTimeout(makeAiMove, 650);
      }
    }

//initialise game
start.addEventListener("click", initializeGame); 

//Game logic
gridSquare.addEventListener("click", handleCellClick)
