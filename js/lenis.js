let lenis; // Declare lenis variable at a higher scope

function initLenis() {
  // Check if lenis is already initialized
  if (!lenis) {
    // Initialize Lenis.js
    lenis = new Lenis();

    // Add the scroll event listener
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Start the animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  } else {
    // Reset or update Lenis.js internal state if necessary
    lenis.reset(); // Replace with the actual method to reset/update Lenis.js
  }
}

// Function to reset or update Lenis.js
function resetLenis() {
  if (lenis) {
    lenis.reset(); // Replace with the actual method to reset/update Lenis.js
  }
}