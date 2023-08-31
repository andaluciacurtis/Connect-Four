const gridDisplay = document.querySelector('.grid');
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');

let currentPlayer = 1;
let squares;

createBoard();

function createBoard() {
  for (let i = 0; i < 42; i++) {
    let square = document.createElement("div");
    gridDisplay.appendChild(square);
  }

  for (let i = 0; i < 7; i++) {
    let square = document.createElement("div");
    square.classList.add("taken");
    gridDisplay.appendChild(square);
  }

  squares = document.querySelectorAll('.grid div');
}

function checkBoard() {
  let currentPlayerClass;
  currentPlayer === 1 ? currentPlayerClass = 'player-one' : currentPlayerClass = 'player-two';

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].classList.contains(currentPlayerClass)) {
      if ((i < 27 && squares[i + 7].classList.contains(currentPlayerClass) && squares[i + 14].classList.contains(currentPlayerClass) &&   
           squares[i + 21].classList.contains(currentPlayerClass))
          || 
          (i % 7 <= 4 && i % 7 > 0 && squares[i + 1].classList.contains(currentPlayerClass) && squares[i + 2].classList.contains(currentPlayerClass) && squares[i + 3].classList.contains(currentPlayerClass))) {
        result.innerHTML = `Player ${currentPlayer} wins!!`;
        gridDisplay.style.display = 'none';
      }
    }
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = ()=> {
    // if the square below your current square is taken, you can go on top of it
    if (squares[i + 7].classList.contains('taken')) {
      if (currentPlayer == 1) {
        squares[i].classList.add('taken');
        squares[i].classList.add('player-one');
      } else if (currentPlayer == 2) {
        squares[i].classList.add('taken');
        squares[i].classList.add('player-two');
      } 
    } else {
      alert('cant go there');
    }
    currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1; 
  }
}