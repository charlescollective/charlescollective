// Custom script for scroll-based animation
function createScrollAnimation(options) {
    const targetRow = document.querySelector(options.targetRow);
    const animation = options.animation;
  
    function updateAnimation() {
      const rowTop = targetRow.offsetTop;
      const rowHeight = targetRow.offsetHeight;
      const scrollPosition = window.scrollY;
  
      // Recalculate visible range based on both scroll position and window size
      const visibleRangeStart = rowTop + rowHeight * options.startPercentage - window.innerHeight;
      const visibleRangeEnd = rowTop + rowHeight * options.endPercentage;
  
      if (scrollPosition >= visibleRangeStart && scrollPosition <= visibleRangeEnd) {
        const progress = (scrollPosition - visibleRangeStart) / (visibleRangeEnd - visibleRangeStart);
        animation.seek(progress * animation.duration);
      }
    }
  
    // Call the update function on scroll and window resize
    window.addEventListener('scroll', updateAnimation);
    window.addEventListener('resize', updateAnimation);
  
    // Initial call to set the animation state on page load
    updateAnimation();
  }
  
  // Custom script for trigger-based add class animation
  function createTriggerAnimation(options) {
    const targetRow = document.querySelector(options.targetRow);
    const targets = document.querySelectorAll(options.targets);
  
    function updateAnimation() {
      const rowTop = targetRow.offsetTop;
      const rowHeight = targetRow.offsetHeight;
      const scrollPosition = window.scrollY;
  
      // Recalculate visible range based on both scroll position and window size
      const visibleRangeStart = rowTop + rowHeight * options.triggerPercentage - window.innerHeight;
  
      if (scrollPosition >= visibleRangeStart) {
        targets.forEach(target => target.classList.add(options.addClass));
      } else if (options.removeClass) {
        targets.forEach(target => target.classList.remove(options.addClass));
      }
    }
  
    // Call the update function on scroll and window resize
    window.addEventListener('scroll', updateAnimation);
    window.addEventListener('resize', updateAnimation);
  
    // Initial call to set the animation state on page load
    updateAnimation();
  }
  
  
  
  
  // Scroll animations
  
 

  
  const videostretch = anime({
    targets: '.showreel-container',
    height: ['100vh', '50vh'],
    autoplay: false,
    easing: 'easeInOutSine'
  });
  
  createScrollAnimation({
    targetRow: '.row3',
    animation: videostretch,
    startPercentage: 1,
    endPercentage: 1.5
  });
  
  const mainmove = anime({
    targets: '.main-header',
    translateY: '-700px',
    autoplay: false,
    easing: 'linear'
  });
  
  createScrollAnimation({
    targetRow: '#main-container',
    animation: mainmove,
    startPercentage: 1,
    endPercentage: 1.5
  });

  
  
  

  
  const sec2title = anime({
    targets: '.sec2-title-cont',
    translateY: ['0px','300px'],
    autoplay: false,
    easing: 'linear'
  });
  
  createScrollAnimation({
    targetRow: '.row2',
    animation: sec2title,
    startPercentage: 0.3,
    endPercentage: 1.8
  });  
  
  
  const sec2parallax = anime({
    targets: '.sec2-para-cont',
    translateY: ['200px','-200px'],
    autoplay: false,
    easing: 'linear'
  });
  
  createScrollAnimation({
    targetRow: '.row2',
    animation: sec2parallax,
    startPercentage: 0.3,
    endPercentage: 1.8
  });



  // Trigger animations

createTriggerAnimation({
  targets: '.navbar',
  targetRow: '#main-container',
  addClass: 'nav-out',
  triggerPercentage: 1.4,
  removeClass: true
});

createTriggerAnimation({
  targets: '.main-container-trail',
  targetRow: '#main-container',
  addClass: 'main-container-trail-out',
  triggerPercentage: 1.5,
  removeClass: true
});