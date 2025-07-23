// Utility for tracking game statistics

const defaultStats = {
  totalGames: 0,
  playerXWins: 0,
  playerOWins: 0,
  draws: 0,
  vsComputer: 0,
  vsPlayer: 0
};

export const getStoredStats = () => {
  const stats = localStorage.getItem('tictactoe_stats');
  return stats ? JSON.parse(stats) : defaultStats;
};

export const updateGameStats = (winner, gameMode) => {
  const stats = getStoredStats();
  stats.totalGames += 1;
  
  if (winner === 'X') stats.playerXWins += 1;
  else if (winner === 'O') stats.playerOWins += 1;
  else stats.draws += 1;

  if (gameMode === 'computer') stats.vsComputer += 1;
  else stats.vsPlayer += 1;

  localStorage.setItem('tictactoe_stats', JSON.stringify(stats));
  return stats;
};
