
// connect to game board
const board = document.getElementById('board');

// View
// declare function to generate html elements
function generateElement(type, id, classList, event = false, eventListenerFunction = false) {
    let newElement = document.createElement(type);
    newElement.id = id;
    newElement.setAttribute('class', classList);
    if (event) {
        newElement.addEventListener(event);
    }
    // would i need parent here? 
        
    }
    return newElement;
}
    
}
}
return newElement;
}


// declare function  retrieve html elements -- Can i make this into class, constructor, this.??
function initView() {
    board.innerHTML = '';
    let boardRow = generateElement('div', 'boardRow', 'row align-items-start', board);
    let BoardColumn = generateElement('div', 'BoardColumn', 'col', boardRow);
    let gridRow = generateElement('div', 'gridRow', 'row align-items-start', BoardColumn);
    for (let i = 0; i < 9; i++) {
        let newSquare = ggenerateElement('div', 'col-', newSquare, 'click', boardTileClick);
        new_grid_square.textContent = '-';
    }
  


Refer back to pseudo.. 


