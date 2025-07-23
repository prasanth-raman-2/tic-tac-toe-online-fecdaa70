import React from 'react';
import './StatsDisplay.css';
import { getStoredStats } from '../../utils/statisticsTracker';

const StatsDisplay = () => {
  const stats = getStoredStats();

  return (
    <div className="stats-container">
      <h2>Game Statistics</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Total Games</span>
          <span className="stat-value">{stats.totalGames}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Player X Wins</span>
          <span className="stat-value">{stats.playerXWins}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Player O Wins</span>
          <span className="stat-value">{stats.playerOWins}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Draws</span>
          <span className="stat-value">{stats.draws}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
