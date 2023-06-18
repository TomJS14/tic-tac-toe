**To Do**

1. Refactor and focus on minimal global code - using factories & modules 

2. Add a form element to ask for the players name, setting this to the status and result messages

3. Add a modal to pop up when the game is won, move the button to the modal

4. Display modal at start of game, to include the start game button, also include the form element (Re-use logic from library)

5. Add logic to play against computer

6. Add on hover effect to display the players token




**pseudocode**



Create a 3x3 grid as a two-dimensional array to represent the game board

<!--
     1 | 2 | 3
     4 | 5 | 6
     7 | 8 | 9 
-->

Create a variable to keep track of the current player (start with player X)

Create a variable to keep track of the game status (ongoing, won, or tie)

Display the initial grid

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

Wait for any further user input (click or selection) to restart the game

Restart the game (reset the grid, current player, and game status)




