# CS110_lab2: Lab 2 - Tic Tac Toe
Basic Requirements

Allow for two players to take turns. Assume X always starts the game. 
Detect when the game ends (when there is no more possible moves, i.e. all squares have either an X or an O). 
Detect when a player wins. To win, the player must get three of their pieces (X or O) in a row.
Output message to indicate whether its player X's turn or player O's turn. 
Maintain the score for each player, i.e. the number of games that player has won. There should be a "Reset" button that resets the scores as well as the board. 
Maintain an array that holds the squares that contain Xs and one that holds the moves made by O. You can use this array to determine if 9 moves have been made and whether its a tie, or whether the current player who made the move just won the game. 
Create a New Game button that resets the board and starts a new game. Unlike the "Reset" button, the "New Game" button does not reset the scores. 
Your design should look similar to the above prototype but you can be creative in your design as long the required elements are included. Again be sure not to copy code online as that will result in a zero.
Once you implemented the above features, then create another button to allow user to either "Play Against AI" or "Select 2 Players". If they select "Play Against AI" then create a simple AI to allow the user to play against the computer. Note, the computer can be pretty dumb and just select to play any random square on the tic tac toe board.
Finally, you will add a time for players. Set the time to be half a second (or some other reasonable time). You will need to implement some sort of timer event (https://www.w3schools.com/js/js_timing.asp (Links to an external site.)). If a user is out of time, you should display a message and then skip their turn. Ideally, your timer should count down the seconds. This is an example on W3C that you can modify and implement to countdown the seconds. 
(5 points extra credit) If you are interested in making your AI "smarter", then look at the MinMax approach
