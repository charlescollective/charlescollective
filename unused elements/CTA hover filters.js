 

 function applyFilters() {
    const images = document.querySelectorAll(".work-image-container img");
  
    images.forEach(img => {
      img.style.filter = "saturate(0) brightness(0.2)";
    });
  }
  
  function removeFilters() {
    const images = document.querySelectorAll(".work-image-container img");
  
    images.forEach(img => {
      img.style.filter = "";
    });
  }
  
  function workctahover() {
    const ctaElement = document.querySelector(".full-width-cta");
  
    if (ctaElement) {
      ctaElement.addEventListener("mouseenter", function() {
        applyFilters();
      });
  
      ctaElement.addEventListener("mouseleave", function() {
        removeFilters();
      });
    }
  }