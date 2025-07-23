class SoundManager {
  constructor() {
    this.sounds = {
      move: new Audio('/sounds/move.mp3'),
      win: new Audio('/sounds/win.mp3'),
      draw: new Audio('/sounds/draw.mp3')
    };
    
    this.isMuted = localStorage.getItem('sound_muted') === 'true';
  }

  playSound(soundName) {
    if (!this.isMuted && this.sounds[soundName]) {
      this.sounds[soundName].currentTime = 0;
      this.sounds[soundName].play().catch(() => {
        // Ignore audio play errors
      });
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('sound_muted', this.isMuted);
    return this.isMuted;
  }
}

export const soundManager = new SoundManager();
