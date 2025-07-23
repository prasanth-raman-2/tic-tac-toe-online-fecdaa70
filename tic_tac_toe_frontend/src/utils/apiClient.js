const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

class ApiClient {
  async saveGame(gameData) {
    try {
      const response = await fetch(`${API_BASE_URL}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to save game:', error);
      throw error;
    }
  }

  async getGameHistory() {
    try {
      const response = await fetch(`${API_BASE_URL}/games`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch game history:', error);
      throw error;
    }
  }
}

export const apiClient = new ApiClient();
