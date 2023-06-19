**To return and do**

1. Refactor and focus on minimal global code - using factories & modules 

2. Add minimax algorithm for unbeatable AI

3. Add on hover effect to display the players token





**My pseudocode**

Create a 3x3 grid as a two-dimensional array to represent the game board

<!--
     1 | 2 | 3
     4 | 5 | 6
     7 | 8 | 9 
-->

Create a variable to keep track of the current player (start with player X)

Create a variable to keep track of the game status (ongoing, won,)

Display the initial grid after button pressed

Repeat the following steps until the game status changes:
    - Wait for the current player's input (click or selection)
    - Get the selected cell from the input

    If the selected cell is valid and not already occupied:
        - Set the cell value to the current player's token
        - Update the grid display
        - Check if the current player has won or if it's a tie
        - If yes, set the game status accordingly
        - Switch the current player to the other player

Display the final grid

If the game was won:
    - Display a congratulatory message for the winning player
Else if the game was a tie:
    - Display a message indicating a tie game

Wait for user input (click or selection) to restart the game

Restart the game (reset the grid, current player, and game status)




