
let slides = document.getElementsByClassName('staff__img');
let dots = document.getElementById('staff__button');
let slideIndex = 1;


function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < slides.length; i++) {
        dots[i].classList.remove('active');
    }
};

function plusSlides(n) {
    showSlides(slideIndex += n);
};
function currentSlide(n) {
    showSlides(slideIndex = n)
};
dots.onclick = function () {
    plusSlides(-1);
};



