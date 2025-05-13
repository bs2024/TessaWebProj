'use strict';

$(document).ready(() => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    let intervalId;

    function show(i) {
        slides.forEach(s => s.classList.remove('active'));
        slides[i].classList.add('active');
    }

    window.move = function (step) {  // Make move globally accessible
        index = (index + step + slides.length) % slides.length;
        show(index);
        resetInterval();  // Reset the interval every time the user clicks an arrow
    };

    // Set the interval to change slides every 5 seconds
    function resetInterval() {
        clearInterval(intervalId);  // Clear the existing interval
        intervalId = setInterval(() => window.move(1), 5000);  // Restart the interval
    }

    // Bind the click events to the left and right arrows
    $('.left-arrow').on('click', () => move(-1));
    $('.right-arrow').on('click', () => move(1));

    // Start the interval when the page loads
    resetInterval();  // Start the interval at page load
});
