var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.getElementsByClassName("slides");
    var thumbnails = document.getElementsByClassName("cursor");
    var captionText = document.getElementsByClassName("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n <= 0) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].className += " active";
    captionText[0].innerHTML = thumbnails[slideIndex - 1].alt.toUpperCase();
}

function plusSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}