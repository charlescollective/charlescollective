<div class="marquee footer-marquee">
              <div class="marquee__inner">
                <div class="marquee__part">
                  Engage
                  <div class="dash">
                    <img src="assets/icons/dash.svg" alt="" />
                  </div>
                  Immerse
                  <div class="dash">
                    <img src="assets/icons/dash.svg" alt="" />
                  </div>
                  Inspire
                  <div class="dash">
                    <img src="assets/icons/dash.svg" alt="" />
                  </div>
                  Stand out
                  <div class="dash">
                    <img src="assets/icons/dash.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>


let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee__part", {
    xPercent: 100,
    repeat: -1,
    duration: 15,
    ease: "linear",
  })
  .totalProgress(0.4);

gsap.set(".marquee__inner", { xPercent: -60 });

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;
});



.marquee {
    position: relative;
    color: #FEF7DF;
    padding: 32px 0;
    overflow: hidden;
    top: 50%;
    transform: translate(0,-60%);
    opacity: 1;
  }
  
  .marquee__inner {
    display: flex;
    width: fit-content;
    flex: auto;
    flex-direction: row;
    transform: translate(0,0);
  }
  
  .marquee__part {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 0 4px;
    transform: translate(0,0) rotate;
  }

 

 
  
  .dash {
    width: 6vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: saturate(0);
    margin: 1em 2em 0px 3em;
  }

 

  .dash img {
    width: 5vw;
    height: auto;
  }