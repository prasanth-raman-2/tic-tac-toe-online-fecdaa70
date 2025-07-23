export const fadeIn = (element, duration = 300) => {
  element.style.opacity = 0;
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
};

export const bounceEffect = (element, scale = 1.2, duration = 200) => {
  element.style.transition = `transform ${duration}ms ease-in-out`;
  element.style.transform = `scale(${scale})`;
  
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, duration);
};

export const slideIn = (element, direction = 'left', distance = '20px', duration = 300) => {
  const startPosition = `translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${direction === 'left' || direction === 'top' ? '-' : ''}${distance})`;
  
  element.style.transform = startPosition;
  element.style.opacity = 0;
  element.style.transition = `all ${duration}ms ease-out`;
  
  requestAnimationFrame(() => {
    element.style.transform = 'translate(0)';
    element.style.opacity = 1;
  });
};
