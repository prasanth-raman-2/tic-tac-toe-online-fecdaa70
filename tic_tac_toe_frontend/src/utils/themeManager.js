const themes = {
  light: {
    primary: '#1976d2',
    accent: '#fbc02d',
    secondary: '#ffffff',
    text: '#333333',
    border: '#e0e0e0'
  },
  dark: {
    primary: '#0d47a1',
    accent: '#ffa000',
    secondary: '#121212',
    text: '#ffffff',
    border: '#333333'
  }
};

export const getTheme = (themeName = 'light') => {
  return themes[themeName] || themes.light;
};

export const applyTheme = (themeName) => {
  const theme = getTheme(themeName);
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });
};
