

function cloneElements(containerSelector, elementSelector, cloneCount) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const elementClone = container.querySelector(elementSelector).cloneNode(true);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < cloneCount; i++) {
      fragment.appendChild(elementClone.cloneNode(true));
    }

    container.appendChild(fragment);
  });
}

function clonePixels() {
  cloneElements(".pixel-container", ".pixel", 2499);

  var pixelElements = document.querySelectorAll('.pixel');

  pixelElements.forEach(function(pixelElement) {
    pixelElement.addEventListener('mouseover', function () {
      if (!isScrolling) {
        pixelElement.classList.add('pixel-active');
        setTimeout(function() {
          pixelElement.classList.remove('pixel-active');
        }, 0); 
      }
    });

    pixelElement.addEventListener('mouseleave', function () {
      pixelElement.classList.remove('pixel-active');
    });
  });

  var isScrolling = false;
  var scrollTimeout;

  window.addEventListener('scroll', function() {
    isScrolling = true;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
      isScrolling = false;
    }, 10); 
  });
}

function cloneMarquee() {
  cloneElements(".marquee__inner", ".marquee__part", 2);
}



function initCustomCursor() {
  var cursor = document.querySelector('.customcursor');
  var horizontalScrollContainer = document.querySelector('.testimonial-scroll');
  
  document.addEventListener('mousemove', function(e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });
  
  horizontalScrollContainer.addEventListener('mouseover', function() {
    cursor.classList.add('customcursor-active');
  });
  
  horizontalScrollContainer.addEventListener('mouseout', function() {
    cursor.classList.remove('customcursor-active');
  });
  }
  
  
  
  function initAccordion() {
  var acc = document.getElementsByClassName("services-accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("services-accordion-active");
    });
  }

  var accTitles = document.getElementsByClassName("services-accordion-title");
  for (i = 0; i < accTitles.length; i++) {
    accTitles[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

}




// Lenis integration to reset container size between pages
let lenis; 

function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1,
});

//remove console log lenis.on('scroll', (e) => { console.log(e) })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

}


function destroyLenis() {
  if (lenis) {
    lenis.destroy(); 
    lenis = null;
  }
}


// Recalculate lenis on accordion click
document.addEventListener('click', function (event) {
  const target = event.target;

  const accordionElement = target.closest('.services-accordion');

  if (accordionElement) {
    destroyLenis();
    initLenis();
  }
});








// initial loader animation
function loadAnimation() {

  var loader = gsap.timeline(); 

  //bars
  loader.to(".transition-bar", {
    duration: 1,
    translateY: '-104vh',
    ease: "power4.inOut",
    stagger: -0.05,
    delay: 1.3,
  });
 


  let iconloader = gsap.timeline();
  iconloader.to(".loading-icon", {
    y: 401, duration: 0, delay: 0,
  });
  iconloader.to(".loading-icon", {
    y: 0, duration: .5, ease: "power4.out",
  });
  iconloader.to(".loading-icon", {
    y: -400, duration: .5, ease: "power4.in", delay: .8,
  });

  
}





// Page transition animations
function pagetransition() {

    var transition = gsap.timeline();

    transition.to(".transition-bar", {
      duration: 0,
      translateY: '104vh',
    });
  
    transition.to(".transition-bar", {
      duration: 1,
      translateY: '0vh',
      stagger: 0.05,
      ease: "power4.inOut",
    });
  
    transition.to(".transition-bar", {
        duration: 1,
        translateY: '-104vh',
        ease: "power4.inOut",
        stagger: -0.05,
        delay: .2,
      });
    }
  




function contentAnimation() {



 //experience logos cycle
 const experiencelogos = document.querySelectorAll(".experience-logo-wrap");

 function animateLogo(index) {
   gsap.to(experiencelogos[index], {
     keyframes: [
       { opacity: 1, duration: 0 },
       { opacity: 0, duration: 0, delay: 1 },
     ],
     onComplete: () => {
       const nextIndex = (index + 1) % experiencelogos.length;
       animateLogo(nextIndex);
     },
   });
 }
 animateLogo(0);
 
 
  //testimonials drag

      gsap.registerPlugin(Draggable);

      const snapPoints = ["-100vw", 0]; // Snap points at -100vw and 0vw in pixels
  
      Draggable.create(".testimonial-scroll", {
        type: "x",
        edgeResistance: 0.2,
        onDrag: function () {
          direction = this.deltaX;
        },
        onDragEnd: function () {
          // Determine the closest snap point based on the drag direction
          const closestSnap = direction > 0 ? snapPoints[1] : snapPoints[0];
  
          gsap.to(this.target, {
            x: closestSnap,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });


}




function initScrollTriggers() {

  let currentScroll = 0;
  let isScrollingDown = true;

  let headermarqueetween = gsap
    .to(".header-marquee .marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
      scrollTrigger: {
        trigger: ".header-marquee",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause play pause",
      },
    })
    .totalProgress(0.5);

    let footermarqueetween = gsap
    .to(".footer-marquee .marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 15,
      ease: "linear",
      scrollTrigger: {
        trigger: ".footer-marquee",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause play pause",
      },
    })
    .totalProgress(0.5);

  gsap.set(".marquee__inner", { xPercent: -50 });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > currentScroll) {
      isScrollingDown = true;
    } else {
      isScrollingDown = false;
    }

    gsap.to(headermarqueetween, {
      timeScale: isScrollingDown ? 1 : -1,
    });
    gsap.to(footermarqueetween, {
      timeScale: isScrollingDown ? 1 : -1,
    });

    currentScroll = window.pageYOffset;
  });



  gsap.to(".header-marquee .marquee__inner", {
    x: '-=600',
    ease: 'linear',
    scrollTrigger: {
      trigger: ".main-container",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  let footermarquee = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-marquee",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  footermarquee.to(".footer-marquee .marquee__inner", { x: '-=600px' });

  

  let workimageparallax = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
  workimageparallax.to(".work-image-container img", { y: '-50px' });


}




function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}




barba.hooks.beforeLeave(() => {
  destroyLenis();
});

barba.hooks.beforeEnter(() => {
  cloneMarquee();
  ScrollTrigger.getAll().forEach(trigger => {
    trigger.kill();
  });
  initLenis();
  clonePixels();
  setTimeout(initScrollTriggers, 10);
  initCustomCursor();
  initAccordion();
});

barba.hooks.enter(() => {
  window.scrollTo(0, 1);
});



// Barba.js initialization
barba.init({
  sync: true,
  transitions: [{
    // When the user leaves the page
    async leave(data) {
      pagetransition();
      await delay(1000);
    },
    async enter(data) {
      contentAnimation();
      gsap.config({ nullTargetWarn: false });
  },
},
],
});


window.onload = () => {
  window.scrollTo(0, 1);
  setTimeout(contentAnimation, 1000);
  initLenis();
  loadAnimation();
};


