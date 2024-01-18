document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.sec2-trailimg');
  
    // Define the animation
    const animation = anime.timeline({
      autoplay: true,
      loop: true,
      easing: 'linear'
    });
  
    images.forEach((image, index) => {
      animation.add({
        targets: image,
        opacity: [0, 1],
        duration: .01,
        delay: index * 0,
      }).add({
        targets: image,
        opacity: 1,
        duration: 1000,
      }).add({
        targets: image,
        opacity: [1, 0],
        duration: .01,
        delay: 200
      });
    });
});