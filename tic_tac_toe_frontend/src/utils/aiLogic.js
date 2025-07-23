// Advanced AI logic for computer moves

const evaluateBoard = (squares, player) => {
  // Check for winning combinations
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] === player && squares[b] === player && squares[c] === player) {
      return 10;
    }
  }
  return 0;
};

export const findBestMove = (squares, player) => {
  const opponent = player === 'X' ? 'O' : 'X';
  let bestScore = -Infinity;
  let bestMove = null;

  // Try each available move
  squares.forEach((square, index) => {
    if (!square) {
      const newSquares = [...squares];
      newSquares[index] = player;
      const score = evaluateBoard(newSquares, player);
      if (score > bestScore) {
        bestScore = score;
        bestMove = index;
      }
    }
  });

  return bestMove;
};
