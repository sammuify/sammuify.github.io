var canvas = document.getElementById('canvas');
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishPosition);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", startPosition, false);
canvas.addEventListener("touchend", finishPosition, false);
canvas.addEventListener("touchmove", draw, false);

canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 100;

var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

var painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition(e) {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    var x, y;
    if (e.type.startsWith("touch")) {
        var touch = e.touches[0] || e.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    ctx.lineTo(x, y);
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(e.pageX, e.pageY);
}

function goBack() {
    window.history.back();
}

function showResults() {
    var selectedImage = window.localStorage.getItem("selectedImage");
    document.getElementById("selectedImage").src = selectedImage;
    document.getElementById("canvasImage").src = document.getElementById("canvas").toDataURL();

    document.getElementsByClassName("canvas-container")[0].style.display = "none";
    document.getElementsByClassName("results")[0].style.display = "block";

}