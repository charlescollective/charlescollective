const titleContainer = document.getElementById('top-title-container');
const containerRect = titleContainer.getBoundingClientRect();
const maxMovement = 50;

function moveTitleContainer(event) {
  const x = event.clientX - containerRect.left - containerRect.width / 2;
  const y = event.clientY - containerRect.top - containerRect.height / 2;
  const distance = Math.sqrt(x * x + y * y);
  const strength = Math.min(distance / maxMovement, 1);
  const offsetX = strength * (x / distance) * 20;
  const offsetY = strength * (y / distance) * 20;
  titleContainer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
  titleContainer.style.transition = 'transform .5s ease-out';
}

function resetTitleContainer() {
  titleContainer.style.transform = 'translate(0, 0)';
  titleContainer.style.transition = 'transform .5s ease-out';
}

titleContainer.addEventListener('mousemove', moveTitleContainer);
titleContainer.addEventListener('mouseout', resetTitleContainer);
