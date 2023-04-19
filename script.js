const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
  square.addEventListener('click', handleClick);
});

function handleClick(e) {
  const square = e.target;
  if (square.textContent !== '') {
    return;
  }
  square.textContent = currentPlayer;
  if (checkForWin()) {
    alert(`${currentPlayer} wins!`);
    resetGame();
  } else if (checkForTie()) {
    alert('Tie game!');
    resetGame();
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkForWin() {
  const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  return winningCombos.some(combo => {
    return combo.every(square => {
      return document.getElementById(square).textContent === currentPlayer;
    });
  });
}

function checkForTie() {
  return [...squares].every(square => {
    return square.textContent !== '';
  });
}

function resetGame() {
  squares.forEach(square => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}
