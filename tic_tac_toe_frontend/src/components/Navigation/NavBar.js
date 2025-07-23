import React from 'react';
import './NavBar.css';

const NavBar = ({ currentPlayer, gameMode, onModeToggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Tic Tac Toe</div>
      <div className="nav-info">
        <span className="player-info">Current Player: {currentPlayer}</span>
        <button className="mode-toggle" onClick={onModeToggle}>
          {gameMode === 'computer' ? 'Switch to 2 Players' : 'Switch to Computer'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
