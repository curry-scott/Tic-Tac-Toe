
// connect to game board div
const board = document.getElementById('board');

// VIEW

// declare function to generate html elements
function generateElement(type, id, classList, parent = false, event = false, eventListenerFunction = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList);
    if (event) {
        newElement.addEventListener(event, eventListenerFunction);
    }
    if (parent) {
        parent.appendChild(newElement);
    }
    return newElement;
}

// declare function  retrieve html elements
function init_view() {
    board.innerHTML = '';
    let boardRow = generateElement('div', 'boardRow', 'row align-items-start', board);
    let BoardColumn = generateElement('div', 'BoardColumn', 'col', boardRow);
    let grid_parent_row = generateElement('div', 'grid_parent_row', 'row align-items-start', BoardColumn);
    for (let i = 0; i < 9; i++) {
        let new_grid_square = ggenerateElement('div', i, 'col-', grid_parent_row, 'click', tile_click);
        new_grid_square.textContent = '-';
    }
    // create an element to communicate current game state

    // create hidden reset button


// MODEL - game logic

// function to initialize game logic

// track current state of game by counting up number of turns

// track current state of board to check for wins

// declare function to check for win or tie

// declare list of all possible winning grid square index combinations
// (would it be better to store this as a global variable?)

// check all winning combos to see if the given indexes in the board_state array match the given player


// CONTROLLER

// initialize the game (same as reset?)

// set view to start

// set game logic to start



// should this be broken apart into separate model/view functions?
// update everything when a player plays

// move the game forward upon click

// update game state

// update board_state array

// update the board


// when >4 plays have been made, check for win or tie (only for the player that just went)

// lock the remaining buttons

// show reset button

// report on a draw if it gets that far

// show reset button


// toggle current player

// update message board message




