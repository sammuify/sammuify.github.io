var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
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

document.onkeydown = function (event) {
    switch (event.key) {
        case "ArrowLeft":
            plusSlides(-1);
            break;
        case "ArrowUp":
            break;
        case "ArrowRight":
            plusSlides(1);
            break;
        case "ArrowDown":
            break;
    }
}

function showCanvas() {
    window.location.href="canvas.html";
}