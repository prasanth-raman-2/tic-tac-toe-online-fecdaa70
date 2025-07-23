import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner, getComputerMove, isDraw } from './utils/gameLogic';

// PUBLIC_INTERFACE
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [vsComputer, setVsComputer] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const winner = calculateWinner(squares);
  const draw = !winner && isDraw(squares);

  useEffect(() => {
    if (vsComputer && !isXNext && !winner && !draw) {
      const timer = setTimeout(() => {
        const computerMove = getComputerMove(squares);
        if (computerMove !== null) {
          handleSquareClick(computerMove);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [vsComputer, isXNext, squares, winner, draw]);

  // PUBLIC_INTERFACE
  const handleSquareClick = (i) => {
    if (squares[i] || winner || draw) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setGameEnded(false);
  };

  // PUBLIC_INTERFACE
  const toggleGameMode = () => {
    setVsComputer(!vsComputer);
    resetGame();
  };

  const status = winner
    ? `Winner: ${winner}`
    : draw
    ? "It's a draw!"
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className="game-status">{status}</div>
      
      <Board squares={squares} onClick={handleSquareClick} />
      
      <div className="controls">
        <button className="control-btn" onClick={resetGame}>
          New Game
        </button>
        <button className="control-btn accent" onClick={toggleGameMode}>
          {vsComputer ? 'Play vs Friend' : 'Play vs Computer'}
        </button>
      </div>
    </div>
  );
}

export default App;
