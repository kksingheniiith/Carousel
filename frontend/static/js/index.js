let slidePosition = 0;

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.getElementsByClassName('carousel-item');
    document.getElementById("carousel-button-left").addEventListener('click', () => {goToPreviousImage(slides)});
    document.getElementById("carousel-button-right").addEventListener('click', () => {goToNextImage(slides)});
    setInterval(() => {
        goToPreviousImage(slides);
    }, 2000);
});

function goToPreviousImage(slides) {
    const currentSlidePos = slidePosition;
    if (slidePosition == 0) {
        slidePosition = slides.length -1;
    } else {
        slidePosition--;
    }
    slides[currentSlidePos].classList.remove('carousel-item-visible');
    slides[slidePosition].classList.add('carousel-item-visible');
}

function goToNextImage(slides) {
    const currentSlidePos = slidePosition;
    if (slidePosition == slides.length-1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[currentSlidePos].classList.remove('carousel-item-visible');
    slides[slidePosition].classList.add('carousel-item-visible');
}