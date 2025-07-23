export const CONFIG = {
  GAME: {
    BOARD_SIZE: 3,
    WIN_CONDITION: 3,
    AI_DIFFICULTY_LEVELS: ['easy', 'medium', 'hard'],
    DEFAULT_AI_LEVEL: 'medium',
  },
  UI: {
    ANIMATION_DURATION: 300,
    TOAST_DURATION: 3000,
    MAX_PLAYER_NAME_LENGTH: 20,
  },
  STORAGE: {
    STATS_KEY: 'tictactoe_stats',
    SETTINGS_KEY: 'tictactoe_settings',
    THEME_KEY: 'preferred_theme',
  }
};

export const ENDPOINTS = {
  GAMES: '/api/games',
  STATS: '/api/stats',
  USERS: '/api/users',
};
