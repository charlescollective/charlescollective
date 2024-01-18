var cursor1 = document.querySelector('.main-container-trail');
var mainContainer = document.querySelector('.main-container');
var isMouseMovingmain = false;
var timeoutMain;

// Set initial cursor position
var cursorWidth = cursor1.offsetWidth;
var cursorHeight = cursor1.offsetHeight;
var initialX = 0;
var initialY = 0;

// Function to update cursor position
function updateCursorPosition(x, y) {
    anime({
        targets: '.main-container-trail',
        left: x - cursorWidth / 2 + 'px',
        top: y - cursorHeight / 2 + 'px',
        easing: 'easeOutCirc',
        duration: 1500,
        loop: false
    });
}

mainContainer.addEventListener('mousemove', function (e) {
    // Check if the mouse event occurred inside the main container
    if (e.target === mainContainer || mainContainer.contains(e.target)) {
        // Set the cursor width and height
        var cursorX = e.pageX;
        var cursorY = e.pageY;

        // Update the cursor position
        updateCursorPosition(cursorX, cursorY);

        // Add the class when the mouse is moving
        if (!isMouseMovingmain) {
            cursor1.classList.add('main-container-trail-visible');
            isMouseMovingmain = true;
        }

        // Reset the timeoutMain for class removal
        clearTimeout(timeoutMain);
        timeoutMain = setTimeout(function () {
            cursor1.classList.remove('main-container-trail-visible');
            isMouseMovingmain = false;
        }, 100); // Adjust the timeout duration as needed
    } else {
        // Remove the class when the mouse is not moving
        if (isMouseMovingmain) {
            cursor1.classList.remove('main-container-trail-visible');
            isMouseMovingmain = false;
        }
    }
});

// Set initial cursor position when the page loads
document.addEventListener('DOMContentLoaded', function () {
    initialX = window.innerWidth / 2; // Set the initial X position to the center of the window
    initialY = window.innerHeight / 2; // Set the initial Y position to the center of the window
    updateCursorPosition(initialX, initialY);
});





var play1 = document.querySelector('.showreel-play');
var showreelContainer = document.querySelector('.row3');
var isMouseInsideContainer = false;

showreelContainer.addEventListener('mousemove', function (e) {
    // Get the position of showreelContainer
    var containerRect = showreelContainer.getBoundingClientRect();

    // Calculate the cursor position relative to showreelContainer
    var cursorX = e.clientX - containerRect.left;
    var cursorY = e.clientY - containerRect.top;

    // Set the play width and height
    var playWidth = play1.offsetWidth;
    var playHeight = play1.offsetHeight;

    // Animation for left and top values
    anime({
        targets: '.showreel-play',
        left: cursorX - playWidth / 2 + 'px',
        top: cursorY - playHeight / 2 + 'px',
        easing: 'easeOutCirc',
        duration: 1500,
        loop: false
    });

    // Check if the mouse is inside showreelContainer
    isMouseInsideContainer = cursorX >= 0 && cursorX <= containerRect.width &&
                             cursorY >= 0 && cursorY <= containerRect.height;

    // Add or remove the class based on mouse position
    if (isMouseInsideContainer) {
        play1.classList.add('showreel-play-visible');
    } else {
        play1.classList.remove('showreel-play-visible');
    }
});

// Remove the class when the mouse leaves the .row3 element
showreelContainer.addEventListener('mouseleave', function () {
    play1.classList.remove('showreel-play-visible');
    isMouseInsideContainer = false;
});












