

gsap.registerPlugin(ScrollTrigger);

// NOTE: for a responsive version, see https://codepen.io/GreenSock/pen/QWqoKBv

let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".logogroup", {duration: 30}),
scroll = ScrollTrigger.create({
  trigger: document.querySelector('[data-scroll-container]'),
  onUpdate(self) {
    if (self.direction !== direction) {
      direction *= -1;
      gsap.to([roll1], {timeScale: direction, overwrite: true});
    }
  }
});


// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  const tl = gsap.timeline({
    repeat: -1,
    onReverseComplete() { 
      this.totalTime(this.rawTime() + this.duration() * 30); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
    }
  });
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  gsap.utils.toArray(targets).forEach(el => {
    let clone = el.cloneNode(true);
    el.parentNode.appendChild(clone);
    gsap.set(clone, {position: "absolute", top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)});
    tl.to([el, clone], {xPercent: reverse ? 100 : -100, ...vars}, 0);
  });
  return tl;
}