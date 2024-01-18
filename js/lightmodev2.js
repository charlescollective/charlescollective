const navCentre = document.querySelector('.nav-centre');
let isLightMode = false; // Initial state: light mode inactive

navCentre.addEventListener('click', () => {
  if (isLightMode) {
    // Currently in light mode, switch to dark mode
    document.querySelectorAll('.colourise-bg').forEach(element => {
      element.classList.remove('light-mode-bg');
    });

    document.querySelectorAll('.colourise-colour').forEach(element => {
      element.classList.remove('light-mode-colour');
    });

    document.querySelectorAll('.colourise-invert').forEach(element => {
      element.classList.remove('light-mode-invert');
    });

    document.querySelectorAll('.main-container').forEach(element => {
      element.classList.remove('light-mode-main-container');
    });

    document.querySelectorAll('#canvas').forEach(element => {
      element.classList.remove('light-mode-canvas');
    });

    document.querySelectorAll('.nav-centre').forEach(element => {
      element.classList.remove('light-mode-nav-centre');
    });

    isLightMode = false;
  } else {
    // Currently in dark mode, switch to light mode
    document.querySelectorAll('.colourise-bg').forEach(element => {
      element.classList.add('light-mode-bg');
    });

    document.querySelectorAll('.colourise-colour').forEach(element => {
      element.classList.add('light-mode-colour');
    });

    document.querySelectorAll('.colourise-invert').forEach(element => {
      element.classList.add('light-mode-invert');
    });

    document.querySelectorAll('.main-container').forEach(element => {
      element.classList.add('light-mode-main-container');
    });

    document.querySelectorAll('#canvas').forEach(element => {
      element.classList.add('light-mode-canvas');
    });

    document.querySelectorAll('.nav-centre').forEach(element => {
      element.classList.add('light-mode-nav-centre');
    });

    isLightMode = true;
  }
});











