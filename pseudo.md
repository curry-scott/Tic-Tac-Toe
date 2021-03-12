MVC
1.view
2.model
3.controller

1. What goes in view
container
    row 
    header
        row 
        both players
            show wins and losses
            show whose turn it is
            who won/tie ending win condition first placement. 

            row for the actual grid
            col acts as container
            1 row
            9col - size 4

            or 
            3 rows 
                3 cols siez 4 for each. 
                tile synonymous with col 
                x - o - or blank

    row
        restart button

    modal(who the winner or tie)        

2. What goes in model

Whos turn it is. string version "x" || "o"- if its x switch to o. 

count (0, 1,2 .... ->)
    dual purpose to keep track of game moves. 

boolean: true or false. If x === true then o is false

need to know who won
    number based on all the rows, cols and diags. 
        use a controller method that would se the state of this number. 
        
        store some number in an array
        0 for no clicks, 1 for x and -1 for 0
        0 for no clicks, 1 ro x, 2 for o
        
        what the array looks like
        [[] [] []]
        [0, 1, 2, 3, 4, 5, 6, 7, 8]
        
        optional; create a tile class to keep track of all tiles.
        tile:-  0 for no clicks, 1 ro x, 2 for o
        {
            clicked
            "" || "x" || "o"
            clicked"- can be abstracted. 
            "who clicked"- can be abstracted. Can be abstracted doesnt have to be a function
            where it is? can be abstracted.
        }


        [tile, tile, tile, tile, tile, tile, tile, tile, tile]



        board: (class)
        {
            is game complete?
            how many tiles do i have?- can be abstracted from length of array
            current stat of all my tiles
        }

        Parent/ Child relationships
        parents can have many childred
        children can only have 1 parent
        children can  have many siblings


tiles could have states
    true/false to dictate tile clickability. Boolean
       on finish of game, lock the tiles.
       on any in game click, lock specific tile.


3. What goes in controller

-initialize
    about length of kata- pseudocode
-helper function for dynamic rendering
    generateElement
-render method
-select x or o 

-tile click event listener
    condition to check if we can start checking moves>5
-set tile clickability- should be unique method
switch current player


-Win condition- check for win or tie
did we have a winner?
set tile clickability for all tiles
display the final game state
display the final game start
restart click event listener



Model

class TicTacToe {
  constructor() {
        board - Array?
        current player = x
        finished? 
        counter = 0; ?? 
        array of clicks?? either array or counter
        

if there was a move
update tile
check for winner
check for tie
   
  }
  

 switch user

repeat until winner or tie
  
  winner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

   
    if (winner) {
      
    }

    return winner;
  }

  draw() {
    const draw = 

    if (tie) {
      
    }

    return tie;
  }

  switchPlayer() {
    currentPlayer = o  
  }
}
























Identify objects in view
what happens in initilize- game starts - shows
    header
    board- 3 X 3 grid
    player notification- whos turn
    reset button

what is needed when initilizing to the board
- gameState- changes after each turn
- boardState- changes after each turn
- currentPlayer- changes after each turn
- playerNotification - text on board of whos turn it is. switch back and forth X to O and O to X
- resetButton- always placed at same location. Can reset at anytime during the game



 
-View
connects to board
    const board= document.getElementById("board")
Load empty board- how do you get it.. function what does 
  initiate create object board. 
  
create row of 3 
create column of 3
row and columns creat tiles
    Create row, columns and tiles- generateElement to create div (Bootstrap).-- Render 

create an element for current game state
  player notification - generateElement --switched with each turn.  

create reset button- 
  text on button- play game
  addEventListener- reset button to reset at anytime during the game



Model- data

Input function initialize game

function init_game() {
    
    game_state = 0;

Calculate current state of game by counting increment 

Call restartGame run gameState

Create board state- create an array-  

Create currentPlayer- X  

Create playerNotification- Player X - Notes: changes after every turn ex: Player O


Check current state of board to check for wins- keeps track of which tiles are available

Check for open array to show all available spaces 

switch to current player, whos turn it is

declare function to check win or tie

update list of all possible winning board tile combinations

check winning combos to see if the given combinations/paused board state array match the given player... 



    

Controller

function for tiles clicked


change currentPlayer

determine updated board and tiles after each players turn

move the game forward on each clicks

when 5 or more plays have been made, check for win or tie

pause board tiles once player chooses

recognize and show with a tie if all 9 tiles are used without winning array

switch to current player

update board with message winner is "X" or "O"

show reset button
   
 


















