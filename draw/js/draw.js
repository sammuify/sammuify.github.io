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

var canvas = document.getElementById('canvas'); 
var g = canvas.getContext("2d");
g.strokeStyle = "red";
g.lineJoin = "round";
g.lineWidth = 3;
g.filter = "blur(1px)";
g.lineCap = 'round';

const
relPos = pt => [pt.pageX - canvas.offsetLeft, pt.pageY - canvas.offsetTop],
drawStart = pt => { with(g) { beginPath(); moveTo.apply(g, pt); stroke(); }},
drawMove = pt => { with(g) { lineTo.apply(g, pt); stroke(); }},

pointerDown = e => drawStart(relPos(e.touches ? e.touches[0] : e)),
pointerMove = e => drawMove(relPos(e.touches ? e.touches[0] : e)),

mouseDraw = method => e => {
    if(method=="add") pointerDown(e);
    canvas[method+"EventListener"]('mousemove', pointerMove);
    canvas[method+"EventListener"]('mouseup', g.closePath);
},
touchDraw = method => e => {
    if(method=="add") pointerDown(e);
    canvas[method+"EventListener"]('touchmove', pointerMove);
    canvas[method+"EventListener"]('touchend', g.closePath);
}

canvas.addEventListener('mousedown', mouseDraw("add"));
canvas.addEventListener('touchstart', touchDraw("add"));
canvas.addEventListener('mouseup', mouseDraw("remove"));
canvas.addEventListener('touchend', touchDraw("remove"));