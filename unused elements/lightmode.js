const lightModeItems = document.querySelectorAll('.light-mode-item');
const darkModeItems = document.querySelectorAll('.dark-mode-item');

// Toggle classes on light mode item click
lightModeItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.colourise-bg').forEach(element => {
      element.classList.add('light-mode-bg');
    });

    document.querySelectorAll('.colourise-full').forEach(element => {
      element.classList.add('light-mode-full');
    });

    document.querySelectorAll('.mode-indicator').forEach(element => {
      element.classList.add('light-mode-toggle');
    });

    document.querySelectorAll('.main-container').forEach(element => {
      element.classList.add('light-mode-main-container');
    });
  });
});

// Toggle classes on dark mode item click
darkModeItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.colourise-bg').forEach(element => {
      element.classList.remove('light-mode-bg');
    });

    document.querySelectorAll('.colourise-full').forEach(element => {
      element.classList.remove('light-mode-full');
    });


    document.querySelectorAll('.mode-indicator').forEach(element => {
      element.classList.remove('light-mode-toggle');
    });

    document.querySelectorAll('.main-container').forEach(element => {
      element.classList.remove('light-mode-main-container');
    });
  });
});