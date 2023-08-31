const squares = document.querySelectorAll('.grid div');
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');

let currentPlayer = 1;

function checkBoard() {
  let currentPlayerClass;
  currentPlayer === 1 ? currentPlayerClass = 'player-one' : currentPlayerClass = 'player-two';

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].classList.contains(currentPlayerClass)) {
      // if ((i < 28 && squares[i + 7].classList.contains('taken') && squares[i + 14].classList.contains('taken') && squares[i + 21].classList.contains('taken')) || (i % 7 > 0 && i % 7 <= 4 && squares[i + 1].classList.contains('taken') && squares[i + 2].classList.contains('taken') && squares[i + 3].classList.contains('taken'))) {
      //   alert('you win');
      // }
      if ((i < 20 && squares[i + 7].classList.contains(currentPlayerClass) && squares[i + 14].classList.contains(currentPlayerClass) &&   
           squares[i + 21].classList.contains(currentPlayerClass))
          || 
          (i % 7 <= 4 && i % 7 > 0 && squares[i + 1].classList.contains(currentPlayerClass) && squares[i + 2].classList.contains(currentPlayerClass) && squares[i + 3].classList.contains(currentPlayerClass))) {
        result.innerHTML = `Player ${currentPlayer} wins!!`;
        return true;
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
    if (checkBoard()) {

    }
    currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1; 
  }
}