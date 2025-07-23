import React from 'react';
import './GameSettings.css';
import { applyTheme } from '../../utils/themeManager';

const GameSettings = () => {
  const handleThemeChange = (theme) => {
    applyTheme(theme);
    localStorage.setItem('preferred_theme', theme);
  };

  return (
    <div className="settings-panel">
      <h3>Game Settings</h3>
      <div className="setting-group">
        <label>Theme</label>
        <div className="theme-buttons">
          <button onClick={() => handleThemeChange('light')}>Light</button>
          <button onClick={() => handleThemeChange('dark')}>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default GameSettings;
