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
const textWrapper = document.querySelector('.sec2-para');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const sec2paracolor = anime({
  targets: '.sec2-para .letter',
  color: ['rgb(77, 77, 77)', 'rgba(255, 255, 255)'],
  autoplay: false,
  easing: 'easeOutExpo',
  delay: (el, i) => 500 + 30 * i
});

createScrollAnimation({
  targetRow: '.row2',
  animation: sec2paracolor,
  startPercentage: 0.2,
  endPercentage: 0
});


const canvasparallax = anime({
  targets: '.gradient-canvas',
  translateY: ['0px', '1000px'],
  autoplay: false,
  easing: 'easeInOutSine'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: canvasparallax,
  startPercentage: 1,
  endPercentage: 1.5
});

const elasticdiv = anime({
  targets: '.elasticdiv',
  height: ['750%', '200%'],
  autoplay: false,
  easing: 'easeInOutSine'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: elasticdiv,
  startPercentage: 1,
  endPercentage: 1.5
});

const elasticdivcont = anime({
  targets: '.elasticdiv-cont',
  height: ['0vh', '50vh'],
  autoplay: false,
  easing: 'easeInOutSine'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: elasticdivcont,
  startPercentage: 1,
  endPercentage: 1.5
});

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



const title1move = anime({
  targets: '.top-title1',
  translateX: '-250px',
  scale: 0.8,
  autoplay: false,
  easing: 'easeInOutCirc'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: title1move,
  startPercentage: 1,
  endPercentage: 1.5
});

const title2move = anime({
  targets: '.top-title2',
  translateX: '350px',
  scale: 0.8,
  autoplay: false,
  easing: 'easeInOutCirc'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: title2move,
  startPercentage: 1,
  endPercentage: 1.5
});

const title3move = anime({
  targets: '.top-title3',
  translateX: '-350px',
  scale: 0.8,
  autoplay: false,
  easing: 'easeInOutCirc'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: title3move,
  startPercentage: 1,
  endPercentage: 1.5
});

const title4move = anime({
  targets: '.top-title4',
  translateX: '380px',
  scale: 0.8,
  autoplay: false,
  easing: 'easeInOutCirc'
});

createScrollAnimation({
  targetRow: '#main-container',
  animation: title4move,
  startPercentage: 1,
  endPercentage: 1.5
});

const sec2titleparallax = anime({
  targets: '.sec2-title',
  translateY: '100px',
  autoplay: false,
  easing: 'easeInOutCirc'
});

createScrollAnimation({
  targetRow: '.row2',
  animation: sec2titleparallax,
  startPercentage: 0,
  endPercentage: 2
});



